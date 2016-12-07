import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../../app.service';

@Component({
    selector: 'city-table',
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
            <tr *ngFor='let item of citiesArray;let i = index;'>
                    <td>{{i}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.main.temp}}</td>
                    <td>{{item.main.pressure}}</td>
                    <td>{{item.wind.speed}}</td>
            </tr>
        </tbody>
    </table>
    `,
    providers: [DataService]
})

export class CityTable implements OnInit {
    citiesArray: Array<CityInfo> = [];
    @Input() coords: Coords;

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.dataService.fetchData(this.coords).subscribe(
            (data: Array<CityInfo>) => {
                this.citiesArray = data
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