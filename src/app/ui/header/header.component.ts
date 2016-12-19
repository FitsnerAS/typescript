import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'my-header',
    styles: [require('./header.css').toString()],
    template:require('./header.html'),
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class MyHeader {
    constructor(){ }
}




