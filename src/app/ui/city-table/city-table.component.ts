import { Component, Input, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { DataService } from '../../services';
import { CityInfo } from '../../interfaces';
import { Coords } from '../../interfaces';

@Component({
    selector: 'city-table',
    templateUrl: './city-table.html',
    styleUrls: ['./city-table.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [DataService]
})

export class CityTable implements OnInit {
    citiesArray: Array<CityInfo> = [];
    @Input() coords: Coords;
    cllectionSize: number;
    currentPage: number = 1;
    cityDataLoaded: boolean = false;

    constructor(private dataService: DataService, private ref: ChangeDetectorRef) {

    }

    addToFavorite(item: CityInfo) {
        item.favorite = true;
    }

    deleteCity(cityInfoId: number) {
        this.citiesArray = this.citiesArray.filter((item: CityInfo) => {
            if (cityInfoId === item.id) this.dataService.Sucess('City is deleted');
            return cityInfoId !== item.id;
        })

    }

    getCitiesArray() {
        this.dataService.fetchData(this.coords).subscribe(
            (data: Array<CityInfo>) => {
                this.citiesArray = data;
                this.cllectionSize = data.length;
                this.cityDataLoaded = true;
                this.ref.markForCheck();
            },
            error => {
                this.dataService.errorHandler()
            }
        )
        this.ref.markForCheck();
    }

    ngOnInit() {
        this.getCitiesArray()
        setInterval(() => {
            this.cityDataLoaded = false;
            this.getCitiesArray();
        }, 10000);
    }
}

