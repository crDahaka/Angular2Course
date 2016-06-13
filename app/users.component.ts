import {Component, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {RouterLink, ROUTER_DIRECTIVES} from 'angular2/router';

import {UserService} from './user.service';

@Component({
    templateUrl: 'app/users.component.html',
    providers: [HTTP_PROVIDERS, UserService],
    directives: [RouterLink]
})
export class UsersComponent implements OnInit{
    users: any[];

    constructor(private _service: UserService){}

    ngOnInit(){
        this._service.getUsers()
            .subscribe(users => this.users = users);
    }

    deleteUser(user){
        if (confirm("Are you sure you want to delete" + user.name + "?")){
            var index = this.users.indexOf(user)

            this.users.splice(index, 1);

            this._service.deleteUser(user.id)
                .subscribe(null, err => alert("Could not delete the user."));

            this.users.splice(index, 0);
        }                   
    }
}