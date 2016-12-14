import { Component } from '@angular/core';
import { DataService } from '../app.services';
import { CityInfoPipe } from '../app.pipes';

@Component({
   
    selector: 'my-app',
    styleUrls: ['./app.component.css'],
    templateUrl: './app.component.html',
    providers: [DataService, CityInfoPipe],
})

export class AppComponent {
    locationLoaded: boolean = false;
    coords: Coords;
    city: string;

    constructor(private dataService: DataService) {
        this.dataService.getCoords().then((data: Coords) => {
            this.coords = data;
            this.locationLoaded = true;
            this.locationLoaded = true; 
        },(error: string) => {
                this.dataService.failedAttempt(error);
            }
        )
    }
}

interface Coords {
    latitude: number,
    longitude: number
}
