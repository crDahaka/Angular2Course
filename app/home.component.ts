import {Component} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    template: `<h1>Home</h1>`,
    providers: [HTTP_PROVIDERS],
    directives: [ROUTER_DIRECTIVES]
})
export class HomeComponent{}