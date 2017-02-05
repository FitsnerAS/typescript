import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WeatherComponent } from './weather-component';
import { CityTableComponent } from './ui';
import { MaterialModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WeatheIconsComponent } from './ui';
import { CityColorDirective } from '../directives';
import { WindDirectDirective } from '../directives';
import { DataService } from '../services';
import { EventService } from '../services';
import { CityInfoPipe } from '../pipes';
import { CityInfoComponent } from './ui';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule.forRoot(),
        MaterialModule.forRoot()
    ],
    declarations: [
        CityTableComponent,
        WeatheIconsComponent,
        CityColorDirective,
        WindDirectDirective,
        CityInfoPipe,
        WeatherComponent,
        CityInfoComponent
    ],
    providers: [DataService, EventService],
    exports: [WeatherComponent],
})
export class WeatherModule { }