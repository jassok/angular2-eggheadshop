import 'reflect-metadata'
import 'zone.js'
import "angular2/angular2";

import {Component} from "angular2/core";
import {bootstrap} from "angular2/platform/browser";

// Components
import {profileComponent} from "./profile";
import {addComponent} from "./addnew";

@Component({
    selector:`app`,
    templateUrl:'views/main.html',
    directives:[profileComponent, addComponent]
})

class App {
    message = `Hello world!`;
}


bootstrap(App);