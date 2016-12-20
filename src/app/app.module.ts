import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app-component';
import { CityTableComponent } from './ui';
import { GoogleMapComponent } from './ui';
import { MyHeaderComponent } from './ui';
import { MyFooterComponent } from './ui';
import { CityInfoPipe } from './pipes';
import { MaterialModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import 'hammerjs';
import { HttpModule, JsonpModule } from '@angular/http';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { ModalErrorComponent } from './services';
import { CityColorDirective } from './directives';


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
        CityTableComponent,
        GoogleMapComponent,
        MyHeaderComponent,
        ModalErrorComponent,
        MyFooterComponent,
        CityInfoPipe,
        CityColorDirective
    ],
    entryComponents: [
        ModalErrorComponent
    ],

    bootstrap: [AppComponent]
})
export class AppModule { }
