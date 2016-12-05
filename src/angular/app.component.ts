import { Component } from '@angular/core';
import { CityTable } from './ui';
import { GoogleMap } from './ui';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { DataService } from './app.service';

@Component({
    selector: 'my-app',
    directives: [
        GoogleMap,
        CityTable
    ],
    template: `
    <city-table></city-table>
    <google-map></google-map>
    `,
     providers: [DataService]
})
export class AppComponent {
    constructor() {}
    
}




