import { Component } from '@angular/core';
import { DataService } from '../../services';
import { EventService } from '../../services';
import { CityInfo } from '../../interfaces';

@Component({
    selector: 'city-info',
    templateUrl: './city-info.html',
})

export class CityInfoComponent {
    city: string = null;
    cityInfo: string = null;
    cityInfoArray: CityInfo;

    constructor(private dataService: DataService, private eventService: EventService) { }

    addCity() {
        this.dataService.fetchCityInfo(this.city).then((data: CityInfo) => {
            this.eventService.triggerEvent(data);
        })
    }

    getCurrentCityInfo() {
        this.cityInfo = this.city;
    }
}