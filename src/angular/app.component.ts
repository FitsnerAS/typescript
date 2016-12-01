import { Component } from '@angular/core';
import { CityTable } from './ui';
import { GoogleMap } from './ui';

@Component({
    selector: 'my-app',
    directives: [
        GoogleMap,
        CityTable
    ],
    template: `
    <city-table></city-table>
    <google-map></google-map>
    `
})
export class AppComponent { }
