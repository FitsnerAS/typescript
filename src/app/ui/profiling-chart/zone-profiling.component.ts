import {
    Component,
    ChangeDetectorRef,
        ChangeDetectionStrategy,
    NgZone,
} from '@angular/core';

@Component({
    selector: 'zone-profiling-chart',
    templateUrl: './zone-profiling.html',
        changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ProfilingComponent {
    start: number;
    end: number;
    difference: number;
    constructor(
        private ref: ChangeDetectorRef,
        private ngZone: NgZone
    ) {
        this.ngZone.onStable.subscribe(() => {

            this.end = performance.now();
            this.difference = this.end - this.start;
            if (this.difference > 0) {
                this.lineChartData[0].data.unshift(this.end - this.start);
                this.lineChartData = this.lineChartData.slice();
            }
        });

        this.ngZone.onUnstable.subscribe(() => {
            this.start = performance.now();;
        });
        
        setInterval(() => {
            this.ref.markForCheck();
        }, 500);
    }


    public lineChartData: Array<any> = [
        { data: [0, 1], label: 'change detection tree gets stable in:(ms)' },
    ];

    public lineChartLabels: Array<any> = ['1', '2', '3', '4', '5', '6', '7',
        '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'];

    public lineChartOptions: any = {
        animation: false,
        responsive: true
    };

    public lineChartColors: Array<any> = [
        { // grey
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        },
    ];
    public lineChartLegend: boolean = true;
    public lineChartType: string = 'line';

}

