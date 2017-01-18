import {
    Component,
    Input,
    OnInit,
    ChangeDetectorRef,
    ChangeDetectionStrategy,
    OnChanges,
    SimpleChange
} from '@angular/core';
import { DataService, EventService } from '../../services';
import { CityInfo } from '../../interfaces';
import { Coordinats } from '../../interfaces';

@Component({
    selector: 'city-table',
    templateUrl: './city-table.html',
    styleUrls: ['./city-table.css'],
    //    changeDetection: ChangeDetectionStrategy.OnPush,
//    providers: [DataService, EventService]
})

export class CityTableComponent implements OnInit {
    citiesArray: Array<CityInfo> = [];
    @Input() coords: Coordinats;
    //    @Input() newCity: CityInfo;
    collectionSize: number;
    currentPage: number = 1;
    cityDataLoaded: boolean = false;

    constructor(
        private dataService: DataService,
        private ref: ChangeDetectorRef,
        private eventService: EventService
    ) {
        this.eventService.newCityEvent$.subscribe((value: CityInfo) => {
            console.log(value, '@@@@@@@@@@@@@')
            if(value){
                this.citiesArray.unshift(value);
            }
            
        })
    }

    removeFavorite() {
        this.citiesArray.forEach(item => {
            if (item.favorite) {
                item.favorite = !item.favorite;
            }
        });
    }

    addToFavorite(item: CityInfo) {

        if (item.favorite) {
            this.removeFavorite();
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
        });

        this.collectionSize = this.citiesArray.length;
    }

    getCitiesArray() {
        this.dataService.fetchData(this.coords).subscribe(
            (data: Array<CityInfo>) => {
                this.citiesArray = data;
                this.collectionSize = data.length;
                this.cityDataLoaded = true; console.log(data)
                this.ref.markForCheck();
            },
            error => {
                this.dataService.failedAttempt(error);
            }
        );
    }

    updateCityInfo() {
        this.getCitiesArray();
        setInterval(() => {
            this.cityDataLoaded = false;
            this.getCitiesArray();
        }, 10000);
    }

    ngOnInit() {
        this.updateCityInfo();

    }
}