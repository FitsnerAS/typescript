import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CityTable } from './app.ui';
import { GoogleMap } from './app.ui';
import { MyHeader } from './app.ui';
import { MyFooter } from './app.ui';
import { CityInfoPipe } from './app.pipes';
import { MaterialModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import 'hammerjs';
import { HttpModule, JsonpModule } from '@angular/http';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { ModalError } from './app.services';


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
        NgbModule.forRoot(),
        
    ],
    declarations: [
        
        AppComponent,
        CityTable,
        GoogleMap,
        MyHeader,
        ModalError,
        MyFooter,
        CityInfoPipe
    ],
    entryComponents: [
        ModalError
    ],

    bootstrap: [AppComponent]
})
export class AppModule { }
