import { Component } from '@angular/core';
import { DataService } from '../services';
import { Coordinats, CityInfo } from '../interfaces';

@Component({

    selector: 'my-app',
    styleUrls: ['./app.component.css'],
    templateUrl: './app.component.html',
    providers: [DataService],
})

export class AppComponent {
    locationLoaded: boolean = false;
    coords: Coordinats;
    newCity: CityInfo;

    constructor(private dataService: DataService) {
        this.dataService.getCoords().then((data: Coordinats) => {
            this.coords = data;
            this.locationLoaded = true;
        }, (error: string) => {
            this.dataService.failedAttempt(error);
        });
    }

    cityInfoEventHandler(event: CityInfo) {
        this.newCity = event;
    }
}

