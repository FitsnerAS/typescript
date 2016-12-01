import { Component } from '@angular/core';

@Component({
    selector: 'city-table',
    template: `
    <table class="table table-model-2 table-hover">
        <thead>
            <tr>
                <th>#</th>
                <th>City</th>
                <th>temperature</th>
                <th>Pressure</th>
                <th>Wind speed</th>
            </tr>
        </thead>
        <tbody>
            
        </tbody>
    </table>
    `
})
export class CityTable { }

