import { Pipe, PipeTransform } from '@angular/core';
import { DataService } from '../../app.service';


@Pipe({ name: 'cityInfoPipe' })

export class CityInfoPipe implements PipeTransform {
    cityInfo: CityInfo;
    
    constructor(private dataService: DataService) {}

    transform(value: string ) {

        return this.dataService.fetchCityInfo(value).subscribe(
            (data: CityInfo) => {
               return  data;
                console.log(data, '@@@@@');
            },
            error => {
                this.dataService.errorHandler()
            }
        );
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
