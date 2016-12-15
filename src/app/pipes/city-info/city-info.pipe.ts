import { Pipe, PipeTransform } from '@angular/core';
import { DataService } from '../../app.services';
import { CityInfo } from '../../app.interfaces/';
import { CityInfoArray } from '../../app.interfaces/';


@Pipe({
    name: 'cityInfoPipe',

})

export class CityInfoPipe implements PipeTransform {
    cityInfoArray: Array<CityInfoArray> = [];

    cityInfo: CityInfo = null;

    constructor(private dataService: DataService) { }

    transform(value: string): Promise<CityInfo> {

        if (value === undefined || value === '' || typeof value !== 'string') {
            return null;
        } else {

            value = value.toLowerCase();

            this.cityInfo = null;

            this.cityInfoArray.forEach(item => {

                if (item.city === value && (item.date + 3600000) > new Date().getTime()) {

                    this.cityInfo = item.cityInfo;
                }
            })

            if (this.cityInfo === null) {
                return this.dataService.fetchCityInfo(value).then(
                    (result: CityInfo) => {
                        console.log('from http', result)
                        this.cityInfoArray.push({
                            cityInfo: result,
                            date: new Date().getTime(),
                            city: value
                        })
                        return result
                    },
                    error => {
                        this.dataService.errorHandler()
                    }
                )
            } else {
                return new Promise((resolve, reject) => {
                    console.log("from cache", this.cityInfo)
                    resolve(this.cityInfo);
                })
            }
        }
    }
}


