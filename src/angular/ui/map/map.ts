import { Component, Input } from '@angular/core';
@Component({
    selector: 'google-map',
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
    @Input() coords: Array<Coords>;

    constructor() {}
}

interface Coords {
    latitude: number,
    longitude: number
}



