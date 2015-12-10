import {Component, Input, Output, EventEmitter} from "angular2/angular2";

@Component({
    selector:'contact-edit',
    templateUrl: ''
});

export class ContactEdit{
    @Input() contact;
    @Output() edit = new EventEmitter();
}
