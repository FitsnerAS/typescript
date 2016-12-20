import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'my-footer',
    styleUrls: ['./footer.css'],
    templateUrl:'./footer.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class MyFooter {
    constructor() { }
}




