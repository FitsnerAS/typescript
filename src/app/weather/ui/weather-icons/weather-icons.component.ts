import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
    selector: 'weather-icons',
    templateUrl: './weather-icons.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class WeatheIconsComponent{
    @Input() weather: string;
    constructor() { }
}




