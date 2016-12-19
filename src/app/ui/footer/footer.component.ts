import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'my-footer',
    styles: [`
        .my-footer {
    height: 40px;
    background:#455A64;
}
    `],
    template:require('./footer.html'),
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class MyFooter {
    constructor(){ }
}




