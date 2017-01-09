import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import{ Coordinats } from '../../interfaces';

@Component({
    selector: 'google-map',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [`
		.sebm-google-map-container {
			height: 300px;
		}
	`],
    template: `
    <sebm-google-map [latitude]="coords.latitude" [longitude]="coords.longitude"></sebm-google-map>
    `
})

export class GoogleMapComponent {
    @Input() coords: Coordinats;

    constructor() { }
}