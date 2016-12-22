import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({ selector: '[windDirect]' })
export class WindDirectDirective implements OnInit {

    @Input() windDirect: number;

    constructor(private el: ElementRef) {
    }

    ngOnInit() {
        this.el.nativeElement.style.transform = 'rotate(' + this.windDirect + 'deg)';
    }
}




