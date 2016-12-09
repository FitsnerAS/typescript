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
            .my-footer {
            position:absolute;
            clear: both;

                        height: 40px;
                        bottom:0;
                        left:0;
                        right:0;
                        background:#455A64;
                        
		}
    `],
    template: `
    
        <my-header></my-header>
        <div class='container main-content'>
        <md-card class="demo-card demo-basic">
                <md-input placeholder="Type city" [(ngModel)]="city" style="width: 50%; margin-right:20px;"></md-input>
                <button md-raised-button color="" (click)='getCityInfo(city)'>Submit</button>
            {{city|cityInfoPipe}}
            <md-toolbar color="" >Table</md-toolbar>
            <md-card-content>
                
                    <city-table [coords]='coords' *ngIf='locationLoaded'></city-table>
                    </md-card-content>
                    <google-map [coords]='coords' *ngIf='locationLoaded'></google-map>
            </md-card>
        </div>
        
        <my-footer></my-footer>
    `,
    providers: [DataService,CityInfoPipe],
})
export class AppComponent {
    locationLoaded: boolean = false;
    coords: Coords;
    city:string;
    
    
    getCityInfo(city:string){
        
    };
    
    constructor(private dataService: DataService,private v:CityInfoPipe) {
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


interface CityInfo {
    name: string;
    main: CityInfoMain;
    wind: CityInfoWind;
}

interface CityInfoMain {
    temp: number;
    pressure: number;
}

interface CityInfoWind {
    speed: number;
}