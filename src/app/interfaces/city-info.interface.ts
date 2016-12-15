export interface CityInfo {
    name: string;
    main: CityInfoMain;
    wind: CityInfoWind;
}

export interface CityInfoMain {
    temp: number;
    pressure: number;
}

export interface CityInfoWind {
    speed: number;
}


