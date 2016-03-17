import {Component, Input} from 'angular2/core';
import {Bridge} from '../bridge/bridge';
let theBridge 

@Component({
    selector: 'some-component',
    template: `<div [model]="'someEvent'" (click)="select('someValue')"></div>`
})
export class SomeComponent {
    @Input() model;
    
    constructor() {
        theBridge = new Bridge()
    }
    select(value) {
        theBridge.save(this.model, value)
    }
}
