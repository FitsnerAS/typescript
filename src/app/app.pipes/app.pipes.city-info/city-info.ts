import { Pipe, PipeTransform } from '@angular/core';
import { DataService } from '../../app.service';


@Pipe({ name: 'cityInfoPipe' })

export class CityInfoPipe implements PipeTransform {
    cityInfo: CityInfo;

    constructor(private dataService: DataService) { }

    transform(value: string): Promise<String> {
        console.log(value)
        if (value === undefined || value === '') {
            return null;
        } else {
            return this.dataService.fetchCityInfo(value).then(
                (data: CityInfo) => {
                    return `<table class="table table-model-2 table-hover">
        <thead>
            <tr>
                <th>City</th>
                <th>temperature</th>
                <th>Pressure</th>
                <th>Wind speed</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                    <td>`+ data.name + `</td>
                    <td>`+ data.main.temp + `</td>
                    <td>`+ data.main.pressure + `</td>
                    <td>`+ data.wind.speed + `</td>
            </tr>
        </tbody>
    </table>`
                },
                error => {
                    this.dataService.errorHandler()
                }
            );
        }
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
