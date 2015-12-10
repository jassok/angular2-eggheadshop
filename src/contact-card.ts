import {Component, Input, Output, EventEmitter} from "angular2/angular2";
import {bootstrap} from "angular2/platform/browser";

//All components will follow the same "Class with @Component" pattern
@Component({
    // The selector matches the element in the container
    selector: `contact-card`,
    templateUrl: 'views/contact-card.html'
})
//You *must* `export` your class so you can `import` it later 
export class contactCard {
    @Output() edit = new EventEmitter();
}