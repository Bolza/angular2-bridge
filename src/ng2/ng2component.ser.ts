import {Component, Input} from 'angular2/core';
import {Bridge} from '../bridge/bridge.ser';
let theBridge 

@Component({
    selector: 'some-component',
    template: `<div [model]="'eventName'" (click)="select('someValue')"></div>`
})
export class someComponent {
    @Input() model;
    
    constructor() {
        theBridge = new Bridge()
    }
    select(value) {
        theBridge.save(this.model, value)
    }
}
