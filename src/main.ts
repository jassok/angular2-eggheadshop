import 'reflect-metadata'
import 'zone.js'
import "angular2/angular2";

import {Component, Input, Output, EventEmitter} from "angular2/core";
import {bootstrap} from "angular2/platform/browser";
import {HTTP_PROVIDERS, Http, Response} from "angular2/http";


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
    editing:boolean  = false;
    VIEW:string      = "view";
    EDIT:string      = "edit";
    NEW:string       = "new";
    action:string    = "Edit";

    state:string = this.VIEW;

    contacts:any = {
        address: {},
        name: {}
    };

    contact:any = {
        address: {},
        name: {}
    };

    constructor(public http:Http) { 
        this.http
            .get("http://localhost:8080/users.json")
            .map((res:Response)=> res.json())
            .subscribe(
                data => this.contacts = data,
                err => this.logError(err),
                () => { 
                    console.log("User Loaded")
                    this.contact = this.contacts[0];

                    console.log(this.contacts)

                }
            );
    }

    logError(err) {
        console.error('There was an error: ' + err);
    }

    editContact() {
        this.editing = !this.editing;
        this.state = (this.editing ? this.EDIT : this.VIEW);
        this.action = (this.editing ? 'Cancel' : 'Edit');
    }

    saveCard(event) {
        console.log('click');
        console.log(event);

    }
}

bootstrap(App, [HTTP_PROVIDERS]);