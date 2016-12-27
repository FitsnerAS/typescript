import {
    Component,
    Input,
    OnInit,
    ChangeDetectionStrategy
} from '@angular/core';
import { DataService } from '../../services';
import { Coords } from '../../interfaces';

@Component({
    selector: 'city-table',
    templateUrl: './city-table.html',
    styleUrls: ['./city-table.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [DataService]
})

export class CityTableComponent implements OnInit {
    @Input() coords: Coords;
    collectionSize: number;
    currentPage: number = 1;
    cityDataLoaded: boolean = false;

    constructor() { }

    ngOnInit() {
    }
}

