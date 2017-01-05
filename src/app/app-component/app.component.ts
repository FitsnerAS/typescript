import { Component } from '@angular/core';
import { DataService } from '../services';
import { Coords } from '../interfaces';

@Component({

    selector: 'my-app',
    styleUrls: ['./app.component.css'],
    templateUrl: './app.component.html',
    providers: [DataService],
})

export class AppComponent {
    locationLoaded: boolean = false;
    coords: Coords;
    city: String = null;
    cityInfo: String = null;

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
        });
    }
}

