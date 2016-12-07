import { Injectable} from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class DataService {
    dataUrl(coords: Coords) {
        return 'http://api.openweathermap.org/data/2.5/find?&lat=' + coords.latitude
            + '&lon=' + coords.longitude + '&cnt=50&lang=Ru_ru&units=metric&APPID=1a014cc9a9db908fdb5647f07bc8e0e6'
    }
    constructor(private http: Http) {}

    fetchData(coords: Coords) {
        return this.http.get(this.dataUrl(coords)).map(
            response => response.json().list
        )
    }

    getCoords() {
        return new Promise(function(resolve, reject) {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position) {
                    resolve(position.coords);
                }, function() {
                    resolve({
                        latitude: 53.904539799999995,
                        longitude: 27.5615244
                    });
                });
            };
        });
    }
}

interface Coords {
    latitude: number,
    longitude: number
}

