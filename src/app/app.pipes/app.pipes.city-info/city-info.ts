import { Pipe, PipeTransform } from '@angular/core';
import { DataService } from '../../app.services';
import { CityInfo } from '../../app.interfaces/';

@Pipe({
    name: 'cityInfoPipe',
    
})

export class CityInfoPipe implements PipeTransform {
    cityInfo: CityInfo = null;
    value:String = '';
    constructor(private dataService: DataService) { }
     
    transform(value: string): CityInfo {
        
        this.cityInfo = null;
        this.value = value;
        if (value === undefined || value === '') {
            return null;
        } else {
        
            this.dataService.fetchCityInfo(value).subscribe(
                (result: CityInfo) => {
                    this.cityInfo = result
                },
                error => {
                    this.dataService.errorHandler()
                }
            )
        }
        console.log(this.cityInfo)
        return this.cityInfo;
    }
}

