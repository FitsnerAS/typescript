import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoogleMapComponent } from './ui'
//import { DataService } from '../services';

import { AgmCoreModule } from 'angular2-google-maps/core';
import { EventService } from '../services';

@NgModule({
    imports: [
        CommonModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyAaFWg1Jpix-Krmge62_UDT3Nuf_0Sht6Y'
        }),
    ],
    declarations: [
        GoogleMapComponent
    ],
    providers: [EventService],
    exports: [GoogleMapComponent],
})
export class MapModule { }
