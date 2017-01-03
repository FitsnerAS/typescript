import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { MdSnackBar } from '@angular/material';
import { Coords } from '../../interfaces';

@Injectable()

export class DataService {

    dataUrl(coords: Coords) {
        return 'http://api.openweathermap.org/data/2.5/find?&lat=' + coords.latitude
            + '&lon=' + coords.longitude + '&cnt=50&lang=Ru_ru&units=metric&APPID=1a014cc9a9db908fdb5647f07bc8e0e6'
    }

    cityInfoUrl(cityName: string) {
        return 'http://api.openweathermap.org/data/2.5/weather?q='
            + cityName + '&units=metric&APPID=1a014cc9a9db908fdb5647f07bc8e0e6'
    }

    constructor(private http: Http, public snackBar: MdSnackBar) { }

    fetchData(coords: Coords) {
        return this.http.get(this.dataUrl(coords)).map(
            response => response.json().list
        )
    }

    fetchCityInfo(city: string) {
        return fetch(this.cityInfoUrl(city)).then(
            response => {
                return response.json()
            })
    }

    getCoords() {

        return new Promise(function(resolve, reject) {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(position => {
                    resolve(position.coords);
                }, error => {
                    console.log(error)
                    reject(error.message);
                });
            };
        });
    }

    failedAttempt(error: string) {
        this.snackBar.open(error, 'Try Again');
    }

    Sucess(succes: string) {
        this.snackBar.open(succes, 'Ok!');
    }
}
