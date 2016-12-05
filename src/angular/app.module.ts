import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CityTable } from './ui';
import { GoogleMap } from './ui';
//import { RouterModule } from '@angular/router';
//import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { AgmCoreModule } from 'angular2-google-maps/core';
//import { AppRoutingModule, routingComponents } from './app.routers'


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        JsonpModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyAaFWg1Jpix-Krmge62_UDT3Nuf_0Sht6Y'
        }),
//        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        CityTable,
        GoogleMap,
//        routingComponents
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
