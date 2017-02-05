import { Component } from '@angular/core';
import { EventService } from '../../services';

import { Coordinats } from '../../interfaces';

@Component({
    selector: 'weather',
    templateUrl: './weather.component.html',
})

export class WeatherComponent {
    locationLoaded: boolean = false;
    coords: Coordinats;

    constructor(private eventService: EventService) {
        this.eventService.locationEvent$.subscribe((data: Coordinats) => {
            
                this.locationLoaded = true;
                this.coords = data;
            
        });
    }
}

