import { Component } from '@angular/core';
import { DataService } from './app.service';
import { CityInfoPipe } from './Pipes';

@Component({
    selector: 'my-app',
    styles: [`
            .main-content{
                margin-top:90px;
                margin-bottom:20px;
            }
    `],
    template: `
    <my-header></my-header>
    <div class='container main-content'>
        <md-card class="demo-card demo-basic">
                <md-input placeholder="Type city" [(ngModel)]="city" style="width: 50%; margin-right:20px;"></md-input>
                <button md-raised-button color="" (click)='getCityInfo(city)'>Submit</button>
            <div [innerHTML]="city|cityInfoPipe|async"></div>
            <md-toolbar color="" >Table</md-toolbar>
            <md-card-content>
                <city-table [coords]='coords' *ngIf='locationLoaded'></city-table>
            </md-card-content>
            <google-map [coords]='coords' *ngIf='locationLoaded'></google-map>
        </md-card>
    </div>
    <my-footer></my-footer>
    `,
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
        })
    }
}

interface Coords {
    latitude: number,
    longitude: number
}
