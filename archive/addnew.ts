import {Component} from "angular2/core";
import {bootstrap} from "angular2/platform/browser";

@Component({
    selector: `add-component`,
    templateUrl: 'views/addNew.html'
    //styleUrls:
})
//You *must* `export` your class so you can `import` it later 
export class addComponent { 
    update(profile) {
        console.log(profile);
    }
}