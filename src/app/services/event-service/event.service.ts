import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject.js';
import { Subject } from 'rxjs/Subject';
import { CityInfo } from '../../interfaces';
import { Coordinats } from '../../interfaces';
@Injectable()

export class EventService {
    private newCityEvent: Subject<CityInfo> = new BehaviorSubject<CityInfo>(null);
    
    private locationEvent: Subject<Coordinats> = new Subject<Coordinats>();
    
    newCityEvent$ = this.newCityEvent.asObservable();
    locationEvent$ = this.locationEvent.asObservable();
    constructor() { }

    public triggerEvent(value: CityInfo): void {
        this.newCityEvent.next(value);
    }
    
    public triggerlocationEvent(value: Coordinats): void {
        this.locationEvent.next(value);
    }
}
