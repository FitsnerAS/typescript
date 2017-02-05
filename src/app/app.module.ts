import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app-component';
import { MaterialModule } from '@angular/material';
import { MapModule } from './map';
import { HttpModule, JsonpModule } from '@angular/http';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { MyHeaderComponent } from './ui';
import { MyFooterComponent } from './ui';
import { ProfilingComponent } from './ui';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { DataService } from './services';
import { EventService } from './services';
import { WeatherModule } from './weather';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        JsonpModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyAaFWg1Jpix-Krmge62_UDT3Nuf_0Sht6Y'
        }),
        MaterialModule.forRoot(),
        ChartsModule,
        WeatherModule,
        MapModule
    ],
    declarations: [
        AppComponent,
        MyHeaderComponent,
        MyFooterComponent,
        ProfilingComponent,
    ],
    providers: [
        DataService,
        EventService
    ],

    bootstrap: [AppComponent]
})

export class AppModule { }