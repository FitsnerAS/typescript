import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
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

export class GoogleMap {
    
    @Input() coords:Coords;

    constructor() {}
}

interface Coords {
    latitude: number,
    longitude: number
}



