import { Component } from '@angular/core';
import { DataService, EventService } from '../services';
import { Coordinats } from '../interfaces';

@Component({
    selector: 'my-app',
    styleUrls: ['./app.component.css'],
    templateUrl: './app.component.html',
})

export class AppComponent {

    constructor(private dataService: DataService, private eventService: EventService) {
        this.dataService.getCoords().then((data: Coordinats) => {
            this.eventService.triggerlocationEvent(data)
        }, (error: string) => {
            this.dataService.failedAttempt(error);
        });
    }
}