import {Component} from "angular2/core";
import {Http, Response} from "angular2/http";


@Component({
    selector: 'contact-card',
    templateUrl: 'views/contact-card.html'
})

export class contactCard {
    users:any = {
        address: {},
        name: {}
    };

    selectedUser:any = {
        address: {},
        name: {}
    };

    constructor(public http:Http){
        this.http
            .get("http://localhost:8080/users.json")
            .map((res:Response)=> res.json())
            .subscribe(
                data => this.users = data,
                err => this.logError(err),
                () => { 
                    console.log("User Loaded")
                    this.selectedUser = this.users[0];

                }
            );

         // console.log(single);
    }

    logError(err) {
        console.error('There was an error: ' + err);
    }
}