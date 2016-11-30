import 'core-js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'html5-boilerplate/dist/css/normalize.css';
import 'html5-boilerplate/dist/css/main.css';

import { bootstrap } from '@angular/platform-browser-dynamic';
import { AppComponent } from './angular/app.component';
bootstrap(AppComponent);

module initMapModule {
    let lat: number;
    let lon: number;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            
            lat = position.coords.latitude;
            lon = position.coords.longitude;
            
            fetch('http://api.openweathermap.org/data/2.5/find?&lat=' + lat + '&lon='
                + lon + '&cnt=50&lang=Ru_ru&units=metric&APPID=1a014cc9a9db908fdb5647f07bc8e0e6'
            ).then(function(data) {
                return data.json();
            }).then(function(data) {
                template(data.list);
            })
            initMap();
        }, function(error) {
        console.log(error)
            fetch('http://api.openweathermap.org/data/2.5/find?&lat=' + lat + '&lon='
                + lon + '&cnt=50&lang=Ru_ru&units=metric&APPID=1a014cc9a9db908fdb5647f07bc8e0e6'
            ).then(function(data) {
                return data.json();
            }).then(function(data) {
                template(data.list);
            })
            
            function initMap(): void {
                new google.maps.Map(document.getElementById('map'), {
                    center: new google.maps.LatLng(53.904539799999995,27.5615244),
                    zoom: 8
                });
            }
        });
    }

    function initMap(): void {
        new google.maps.Map(document.getElementById('map'), {
            center: new google.maps.LatLng(lat, lon),
            zoom: 8
        });
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

    function template(arr: Array<CityInfo>): void {
        for (var i = 0; i < arr.length; i++) {
            document.getElementsByTagName('tbody')[0].insertAdjacentHTML(`afterbegin`,
                `<tr>
                <td>`+ (i + 1) + `</td>
                <td>`+ arr[i].name + `</td>
                <td>`+ arr[i].main.temp + `</td>
                <td>`+ arr[i].main.pressure + `</td>
                <td>`+ arr[i].wind.speed + `</td>
            </tr>`
            )
        }
    }
}