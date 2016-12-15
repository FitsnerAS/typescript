import { Component } from '@angular/core';
import { DataService } from '../app.services';
import { CityInfoPipe } from '../app.pipes';
import { Coords } from '../app.interfaces/';

@Component({

    selector: 'my-app',
    styleUrls: ['./app.component.css'],
    templateUrl: './app.component.html',
    providers: [DataService],
})

export class AppComponent {
    locationLoaded: boolean = false;
    coords: Coords;
    city: string;
    cityInfo: string = '';

    getCurrentCityInfo() {
        this.cityInfo = this.city;
    }

    constructor(private dataService: DataService) {
        this.dataService.getCoords().then((data: Coords) => {
            this.coords = data;
            this.locationLoaded = true;
            this.locationLoaded = true;
        }, (error: string) => {
            this.dataService.failedAttempt(error);
        })
    }
}

