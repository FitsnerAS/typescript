import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({ selector: '[cityColor]' })
export class CityColorDirective implements OnInit {


    getBgColor() {
        //        #0D47A1
    }
    @Input() cityColor: string;
    constructor(private el: ElementRef) {

        //        el.nativeElement.style.opacity = '0.'+this.tempr;
    }
    ngOnInit() {
        console.log(this.cityColor)
        this.el.nativeElement.style.backgroundColor = this.cityColor;
    }
}


