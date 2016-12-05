import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class DataService implements OnInit {
    private lat: number = 53.904539799999995;
    private lon: number = 27.5615244;
    private dataUrl = 'http://api.openweathermap.org/data/2.5/find?&lat=' + this.lat
    + '&lon=' + this.lon + '&cnt=50&lang=Ru_ru&units=metric&APPID=1a014cc9a9db908fdb5647f07bc8e0e6'
    ngOnInit() {
    }
    constructor(private http: Http) {

    }

    fetchData() {
        return this.http.get(this.dataUrl).map(
            response => response.json()
        )
    }
    setLat(vv:number){
        this.lat = vv;
    }
    setLon(vv:number){
        this.lon = vv;
    }
    getLat(){
        alert('get')
        return this.lat
    }
    getLon(){
        return this.lon;
    }

//    nav() {
//        if (this.coords == undefined) {
//            return new Promise(function(resolve, reject) {
//                if (navigator.geolocation) {
//                    navigator.geolocation.getCurrentPosition(function(position) {
//
//                        resolve(position.coords);
//                    }, function() {
//                        return { latitude: 53.904539799999995, longitude: 27.5615244 };
//                    });
//                };
//            });
//        } else {
//            return { latitude: this.lat, longitude: this.lon }
//        }
//
//    }
    getConst() {
        return new Observable(observer=> {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position) {
                    alert('beforeres..')
                    observer.next(position.coords);
                }, function() {
                    alert('bad');
                    return { latitude: 53.904539799999995, longitude: 27.5615244 };
                });
            };
        })
    }

}


