import { Injectable, Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { MdDialog, MdDialogRef } from '@angular/material'

interface Coords {
    latitude: number,
    longitude: number
}

@Injectable()

export class DataService {
    dialogRef: MdDialogRef<ModalError>;

    dataUrl(coords: Coords) {
        return 'http://api.openweathermap.org/data/2.5/find?&lat=' + coords.latitude
            + '&lon=' + coords.longitude + '&cnt=50&lang=Ru_ru&units=metric&APPID=1a014cc9a9db908fdb5647f07bc8e0e6'
    }

    constructor(private http: Http, public dialog: MdDialog) { }

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

    errorHandler() {

        this.dialogRef = this.dialog.open(ModalError, {
            disableClose: false
        });

        this.dialogRef.afterClosed().subscribe(result => {
            this.dialogRef = null;
            location.reload();
        });
    }
}

@Component({
    selector: 'modal',
    template: `
        <h2>Error</h2>
        <p>Bad conection with weather API</p>
        <p>Please restart APP</p>
        <button md-raised-button (click)="dialogRef.close('yes')">OK</button>
  `
})
export class ModalError {
    constructor(public dialogRef: MdDialogRef<ModalError>) { }
}

