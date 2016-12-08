import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CityTable } from './ui';
import { GoogleMap } from './ui';
import { MyHeader } from './ui';
import { MaterialModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import 'hammerjs';
import { HttpModule, JsonpModule } from '@angular/http';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { ModalError } from './app.service';


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        JsonpModule,
        FormsModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyAaFWg1Jpix-Krmge62_UDT3Nuf_0Sht6Y'
        }),
        MaterialModule.forRoot(),
        NgbModule.forRoot()
    ],
    declarations: [
        AppComponent,
        CityTable,
        GoogleMap,
        MyHeader,
        ModalError
    ],
    entryComponents: [
        ModalError
    ],

    bootstrap: [AppComponent]
})
export class AppModule { }
