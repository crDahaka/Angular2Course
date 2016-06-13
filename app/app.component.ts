import {Component} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {NavBarComponent} from './navbar.component';
import {UsersComponent} from './users.component';
import {UserFormComponent} from './user-form.component';
import {PostsComponent} from './posts.component';
import {HomeComponent} from './home.component';
import {NotFoundComponent} from './not-found.component';
import {OnInit} from 'angular2/core';

@RouteConfig([
    {path: '/', name: 'Home', component: HomeComponent},
    {path: '/users', name: 'Users', component: UsersComponent},
    {path: 'users/new', name: 'NewUser', component: UserFormComponent},
    {path: 'users/:id', name: 'EditUser', component: UserFormComponent},
    {path: '/posts', name: 'Posts', component: PostsComponent},
    {path: '/not-found', name: 'NotFound', component: NotFoundComponent},
    {path: '/*other', name: 'Other', redirectTo: ['Home']}
])
@Component({
    selector: 'my-app',
    template: `
        <navbar></navbar>
        <div class="container">
            <router-outlet></router-outlet>
        </div>
    `,
    directives: [NavBarComponent, ROUTER_DIRECTIVES]
})
export class AppComponent {   
}