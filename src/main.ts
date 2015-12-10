import 'reflect-metadata'
import 'zone.js'
import "angular2/angular2";

import {Component, Input, Output, EventEmitter} from "angular2/core";
import {bootstrap} from "angular2/platform/browser";
import {HTTP_PROVIDERS} from "angular2/http";

// Components
import {contactCard} from "./contact-card";
import {contactEdit} from "./contact-edit";
import {contactNew} from "./contact-new";


@Component({
    selector:'app',
    templateUrl:'views/main.html',
    directives: [contactCard, contactEdit, contactNew]
})

class App {
    VIEW:string  = "view";
    EDIT:string  = "edit";
    NEW:string   = "new";

    state:string = this.VIEW;

    constructor(public http:Http) { 

    }
}

bootstrap(App, [HTTP_PROVIDERS]);