import { Component } from '@angular/core';
import { Coordinats } from '../../../interfaces';
import { EventService } from '../../../services';

@Component({
    selector: 'google-map',
    styles: [`
		.sebm-google-map-container {
			height: 300px;
		}
	`],
    template: `
      <sebm-google-map 
        [latitude]="coords.latitude" 
        [longitude]="coords.longitude"
        *ngIf='locationLoaded'
      ></sebm-google-map>
    `
})

export class GoogleMapComponent {
    coords: Coordinats;
    locationLoaded: boolean = false; // To ptevent load map without coordinates

    constructor(private eventService: EventService) {
        this.eventService.locationEvent$.subscribe((data: Coordinats) => {
            this.locationLoaded = true;
            this.coords = data;

        });
    }
}