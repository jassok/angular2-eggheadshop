import {Component} from "angular2/core";
import {bootstrap} from "angular2/platform/browser";

//All components will follow the same "Class with @Component" pattern
@Component({
    // The selector matches the element in the container
    selector: `contact-new`,
    templateUrl: 'views/contact-new.html'
})
//You *must* `export` your class so you can `import` it later 
export class contactNew {}