import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class UserService{
    private _baseUrl = "http://jsonplaceholder.typicode.com/users";

    constructor(private _http: Http){}

    addUser(user){
        return this._http.post(this._baseUrl, JSON.stringify(user))
            .map(res => res.json());
    }

    getUser(userId){
        return this._http.get(this.getUserUrl(userId))
            .map(res => res.json());
    }

    getUsers(){
        return this._http.get(this._baseUrl)
            .map(res => res.json())
    }

    private getUserUrl(userId){
        return this._baseUrl + "/" + userId;
    }

    updateUser(user){
        return this._http.put(this.getUserUrl(user.id),JSON.stringify(user))
            .map(res => res.json());
    }

    deleteUser(userId){
        return this._http.delete(this.getUserUrl(userId))
            .map(res => res.json());
    }
}