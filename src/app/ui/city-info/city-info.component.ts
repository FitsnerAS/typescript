import { Component, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../services';
import { CityInfo } from '../../interfaces';

@Component({
    selector: 'city-info',
    templateUrl: './city-info.html',
})

export class CityInfoComponent {
    city: string = null;
    cityInfo: string = null;
    cityInfoArray: CityInfo;
    @Output() cityInfoEvent = new EventEmitter();


    constructor(private dataService: DataService) { }

    addCity() {
        this.dataService.fetchCityInfo(this.city).then((data: CityInfo) => {
            console.log(data)
            this.cityInfoEvent.emit(data)
        })
    }

    getCurrentCityInfo() {
        this.cityInfo = this.city;
    }
}