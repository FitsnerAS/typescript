import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({ selector: '[cityColor]' })
export class CityColorDirective implements OnInit {

    bgColor: String;

    getBgColor(): String {

        switch (true) {
            case (this.cityColor >= 30): this.bgColor = '#F57C00'
                break;
            case (this.cityColor >= 10 && this.cityColor < 30): this.bgColor = '#FFEB3B'
                break;
            case (this.cityColor < 10 && this.cityColor > 0): this.bgColor = '#80D8FF'
                break;
            case (this.cityColor <= 0 && this.cityColor > -10): this.bgColor = '#80DEEA'
                break;
            case (this.cityColor <= -10): this.bgColor = '#01579B'
                break;
            default: this.bgColor = '#F57C00'
                break;
        }

        return this.bgColor
    }

    @Input() cityColor: number;

    constructor(private el: ElementRef) {
    }

    ngOnInit() {
        console.log(this.cityColor)
        this.el.nativeElement.style.backgroundColor = this.getBgColor();
    }
}


