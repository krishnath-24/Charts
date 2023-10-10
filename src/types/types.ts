export type FilterProps = {
    value: string;
    onChange: (value: string) => void;
}



export type Country = {
    name: string;
    status: string;
    unMember: boolean;
    capital?: (string)[] | null;
    altSpellings?: (string)[] | null;
    region: string;
    subregion: string;
    latlng?: (number)[] | null;
    landlocked: boolean;
    borders?: (string)[] | null;
    area: number;
    flag: string;
    population: number;
    maps: {
        googleMaps: string;
    }
}

  