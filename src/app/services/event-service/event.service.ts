import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject.js';
import { Subject } from 'rxjs/Subject';
import { CityInfo } from '../../interfaces';

@Injectable()

export class EventService {
    private newCityEvent: Subject<CityInfo> = new BehaviorSubject<CityInfo>(null);

    newCityEvent$ = this.newCityEvent.asObservable();
    constructor() { }

    public triggerEvent(value: CityInfo): void {
        this.newCityEvent.next(value);
    }
}
