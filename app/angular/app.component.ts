import { Component } from '@angular/core';
import { CityTable } from './ui';

@Component({
    selector: 'my-app',
    directives: [
        CityTable
    ],
    template: `
    <city-table></city-table>
    `
})
export class AppComponent {}
