export interface APIResponse<T = unknown> {
  error: boolean;
  msg: string;
  data: T;
}

export interface CountryPopulation {
  country: string;
  code: string;
  populationCounts: {
    year: number;
    value: number;
  }[];
}

export type AllPopulationResponse = APIResponse<CountryPopulation[]>;

export type CountryPopulationResponse = APIResponse<CountryPopulation>;

export interface Flag {
  name: string;
  flag: string;
  iso2: string;
  iso3: string;
}

export type CountryFlagResponse = APIResponse<Flag>;

export interface CountriesInfo {
  name: string;
  currency: string;
  unicodeFlag: string;
  capital: string;
  flag?: string;
  dialCode: string;
}

export type AllCountriesInfoResponse = APIResponse<CountriesInfo[]>;

export interface GroupedCountries {
  [key: string]: CountryPopulation[];
}