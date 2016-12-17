import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'my-header',
    styleUrls: ['./header.css'],
    templateUrl:'./header.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class MyHeader {
    constructor(){ }
}




