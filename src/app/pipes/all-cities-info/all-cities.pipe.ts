import { Pipe, PipeTransform } from '@angular/core';
import { DataService } from '../../services';
import { CityInfo, CityInfoArray, Coords } from '../../interfaces';


@Pipe({
    name: 'sgAllCityInfoPipe'
})

export class AllCityInfoPipe implements PipeTransform {
    cityInfoArray: Array<CityInfoArray> = [];

    constructor(private dataService: DataService) { }

    transform(coords: Coords): Promise<CityInfo> {

        return this.dataService.fetchData(coords).then(
            (result: CityInfo) => {

                return result
            },
            (error: String) => {
                this.dataService.errorHandler()
            }
        )
    }
}



