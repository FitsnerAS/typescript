import { Component } from '@angular/core';
import { DataService } from './app.service';

@Component({
    selector: 'my-app',
    styles: [`
            
            .main-content{
                margin-top:90px;
                margin-bottom:20px;
                padding:20px;
            }
    `],
    template: `
    
        <my-header></my-header>
        <div class='container main-content'>
            <md-card style="background:#fff">
                    <city-table [coords]='coords' *ngIf='promiseFlag'></city-table>
                    <google-map [coords]='coords' *ngIf='promiseFlag'></google-map>
            </md-card>
        </div>
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
