import { Component } from '@angular/core';
import { DataService } from './app.service';

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
            <md-toolbar color="#90A4AE" >Basic</md-toolbar>
            <md-card-content>
                <form>

                    <md-input placeholder="First name" style="width: 50%"></md-input>
      
                </form>
            
        
                    <city-table [coords]='coords' *ngIf='promiseFlag'></city-table>
                    </md-card-content>
                    <google-map [coords]='coords' *ngIf='promiseFlag'></google-map>
            </md-card>
        </div>
        
        <my-footer></my-footer>
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
