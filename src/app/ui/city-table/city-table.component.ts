import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../../services';
import { CityInfo } from '../../interfaces';
import { Coords } from '../../interfaces';

@Component({
    selector: 'city-table',
    templateUrl: './city-table.html',
    styleUrls: ['./city-table.css'],
    providers: [DataService]
})

export class CityTable implements OnInit {
    citiesArray: Array<CityInfo> = [];
    @Input() coords: Coords;
    cllectionSize: number;
    currentPage: number = 1;
    cityDataLoaded: boolean = false;

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.dataService.fetchData(this.coords).subscribe(
            (data: Array<CityInfo>) => {
                this.citiesArray = data;
                this.cllectionSize = data.length;
                this.cityDataLoaded = true;
            },
            error => {
                this.dataService.errorHandler()
            }
        )
    }
}

