import {
    Component,
    Input,
    OnInit,
    ChangeDetectorRef,
    ChangeDetectionStrategy
} from '@angular/core';
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

export class CityTableComponent implements OnInit {
    citiesArray: Array<CityInfo> = [];
    @Input() coords: Coords;
    collectionSize: number;
    currentPage: number = 1;
    cityDataLoaded: boolean = false;

    constructor(
        private dataService: DataService,
        private ref: ChangeDetectorRef
    ) { }

    removeFavorite() {
        this.citiesArray.forEach(item => {
            if (item.favorite) {
                item.favorite = !item.favorite;
            }
        })
    }

    addToFavorite(item: CityInfo) {

        if (item.favorite) {
            this.removeFavorite()
        } else {
            this.removeFavorite();
            item.favorite = true;
        }
    }

    deleteCity(cityInfoId: number) {

        this.citiesArray = this.citiesArray.filter((item: CityInfo) => {
            if (cityInfoId === item.id) {
                this.dataService.Sucess('City is deleted');
            }
            return cityInfoId !== item.id;
        })

        this.collectionSize = this.citiesArray.length;
    }

    getCitiesArray() {
        this.dataService.fetchData(this.coords).subscribe(
            (data: Array<CityInfo>) => {
                this.citiesArray = data;
                this.collectionSize = data.length;
                this.cityDataLoaded = true;
                this.ref.markForCheck();
            },
            error => {
                this.dataService.errorHandler()
            }
        )
        this.ref.markForCheck();
    }

    updateCityInfo() {
        this.getCitiesArray()
        setTimeout(() => {
            this.cityDataLoaded = false;
            this.getCitiesArray();
            setTimeout(this.updateCityInfo(), 15000);
        }, 15000);
    }

    ngOnInit() {
        this.updateCityInfo()
    }
}

