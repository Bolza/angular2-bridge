import {Component, Input} from 'angular2/core';
import {Bridge} from '../bridge/bridge';
let theBridge 

@Component({
	providers: [Bridge],
    selector: 'some-component',
    template: `<div [model]="'someEvent'" (click)="select('someValue')"></div>`
})
export class SomeComponent {
    @Input() model;

    constructor(bridge: Bridge) {
        this.bridge = bridge
    }
    
    select(value) {
        this.bridge.save(this.model, value)
    }
}
