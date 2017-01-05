import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({ selector: '[cityColor]' })
export class CityColorDirective implements OnInit {

    getBgColor(): String {

        switch (true) {
            case (this.cityColor >= 30): return '#F57C00';

            case (this.cityColor >= 10): return '#FFEB3B';

            case (this.cityColor > 0): return '#80D8FF';

            case (this.cityColor > -10): return '#80DEEA';

            case (this.cityColor <= -10): return '#01579B';

            default: return '#F57C00';

        }
    }

    @Input() cityColor: number;

    constructor(private el: ElementRef) {
    }

    ngOnInit() {
        this.el.nativeElement.style.backgroundColor = this.getBgColor();
    }
}


