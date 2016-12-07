import { Component } from '@angular/core';
import { DataService } from './app.service';
//import { MdButton } from '@angular/material/button';

@Component({
    selector: 'my-app',
   
    styles:[`
             .main-content{
                margin-top:110px;
                
                pading:20px;
             }
        `
    ],
    template: `
        <my-header></my-header>
        <div class='container main-content'>
            <md-card style="background:#fff">
                <div md-content flex layout-padding>
                    <city-table [coords]='coords' *ngIf='promiseFlag'></city-table>
                    <google-map [coords]='coords' *ngIf='promiseFlag'></google-map>
                </div>
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
