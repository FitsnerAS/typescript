import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app-component';
import { CityTableComponent } from './ui';
import { GoogleMapComponent } from './ui';
import { MyHeaderComponent } from './ui';
import { MyFooterComponent } from './ui';
import { ProfilingComponent } from './ui';
import { CityInfoComponent } from './ui';
import { WeatheIconsComponent } from './ui';
import { CityInfoPipe } from './pipes';
import { MaterialModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import 'hammerjs';
import { HttpModule, JsonpModule } from '@angular/http';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { CityColorDirective } from './directives';
import { WindDirectDirective } from './directives';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { DataService } from './services';
import { EventService } from './services';

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
        ChartsModule
    ],
    declarations: [
        AppComponent,
        CityTableComponent,
        GoogleMapComponent,
        MyHeaderComponent,
        MyFooterComponent,
        ProfilingComponent,
        CityInfoComponent,
        WeatheIconsComponent,
        CityInfoPipe,
        CityColorDirective,
        WindDirectDirective
    ],
    providers: [
        DataService,
        EventService
        ],

    bootstrap: [AppComponent]
})

export class AppModule { }
