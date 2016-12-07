import { Component } from '@angular/core';
import { CityTable } from './ui';
import { GoogleMap } from './ui';
import { DataService } from './app.service';

@Component({
    selector: 'my-app',
    directives: [
        GoogleMap,
        CityTable
    ],
    template: `
    <city-table [coords]='coords' *ngIf='promiseFlag'></city-table>
    <google-map [coords]='coords' *ngIf='promiseFlag'></google-map>
    `,
    providers: [DataService]
})
export class AppComponent {
    promiseFlag: boolean = false;
    coords: Coords;
    constructor(private dataService: DataService) {
        this.dataService.getCoords().then((data: Coords) => {
            this.coords = data;
            this.promiseFlag = true;
        })
    }
}

interface Coords {
    latitude: number,
    longitude: number
}
