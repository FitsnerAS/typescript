import { Component } from '@angular/core';
import { DataService } from '../services';
import{ Coordinats } from '../interfaces';

@Component({

    selector: 'my-app',
    styleUrls: ['./app.component.css'],
    templateUrl: './app.component.html',
    providers: [DataService],
})

export class AppComponent {
    locationLoaded: boolean = false;
    coords: Coordinats;

    constructor(private dataService: DataService) {
        this.dataService.getCoords().then((data: Coordinats) => {
            this.coords = data;
            this.locationLoaded = true;
            this.locationLoaded = true;
        }, (error: string) => {
            this.dataService.failedAttempt(error);
        });
    }
}

