export interface CityInfo {
    name: string;
    main: CityInfoMain;
    wind: CityInfoWind;
    favorite: boolean;
    id: number;
}

export interface CityInfoMain {
    temp: number;
    pressure: number;
}

export interface CityInfoWind {
    speed: number;
}


