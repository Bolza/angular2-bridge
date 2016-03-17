import { Injectable } from 'angular2/core';
import { Subject } from 'rxjs';

let eventMap = {}

@Injectable()
export class Bridge {
    on(to, cb) {
    	if (!eventMap[to]) {
    		eventMap[to] = new Subject()
    	}
    	eventMap[to].subscribe(cb);
    }

    save(key, value) {
    	if (eventMap[key]) {
    		eventMap[key].next(value)
    	}
    }

    remove(key) {
        if (eventMap[key]) {
            eventMap[key].dispose()
        }
    }
}
