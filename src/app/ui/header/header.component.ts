import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'my-header',
    styles: [require('./header.css')],
    template:require('./header.html'),
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class MyHeader {
    constructor(){ }
}




