import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../../app.service';

@Component({
    selector: 'city-table',
    styles: [`
             td{
                cursor:pointer
            }
            .my-progress{
                margin:0 auto
            }
    `],
    template: `
    
    <table class="table table-model-2 table-hover">
        <thead>
            <tr>
                <th>#</th>
                <th>City</th>
                <th>temperature</th>
                <th>Pressure</th>
                <th>Wind speed</th>
            </tr>
        </thead>
        <tbody>
            <tr *ngFor='let item of citiesArray | slice:(currentPage-1)*10:(currentPage*10);let i = index;let l = last'>
                    <td *ngIf='!l'>{{currentPage-1}}{{i+1}}</td>
                    <td *ngIf='l'>{{currentPage}}0</td>
                    <td>{{item.name}}</td>
                    <td>{{item.main.temp}}</td>
                    <td>{{item.main.pressure}}</td>
                    <td>{{item.wind.speed}}</td>
            </tr>
        </tbody>
    </table>
    <div layout="row" layout-sm="column" layout-align="space-around">
    <md-progress-circle *ngIf="!promiseFlag" mode="indeterminate" class="md-warn my-progress" color="warn" md-diameter="70"></md-progress-circle>
    </div>
    <ngb-pagination [collectionSize]="cllectionSize" [(page)]="currentPage" size="sm"></ngb-pagination>
    `,
    providers: [DataService]
})

export class CityTable implements OnInit {
    citiesArray: Array<CityInfo> = [];
    @Input() coords: Coords;
    cllectionSize: number;
    currentPage: number = 1;
    promiseFlag:boolean = false;

    constructor(private dataService: DataService) { }
    
    ngOnInit() {
        this.dataService.fetchData(this.coords).subscribe(
            (data: Array<CityInfo>) => {
                this.citiesArray = data;
                this.cllectionSize = data.length;
                this.promiseFlag = true;
            },
            error=>{
                this.dataService.errorHandler()
            }
        )
    }
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

interface Coords {
    latitude: number,
    longitude: number
}