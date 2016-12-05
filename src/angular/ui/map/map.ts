import { Component, OnInit } from '@angular/core';
import { DataService } from '../../app.service';
@Component({
    selector: 'google-map',
    styles: [`
		.sebm-google-map-container {
			height: 300px;
		}
	`],
    template: `
    <sebm-google-map [latitude]="lat" [longitude]="lng"></sebm-google-map>
    `,
    providers: [DataService]
})

export class GoogleMap implements OnInit {
    lat: number;
    lng: number;

    constructor(private dataService: DataService) {
        this.lat = this.dataService.getLat();
        this.lng = this.dataService.getLon();
    }
    ngOnInit() {
    }
}



