export interface APIResponse<T = {} | []> {
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

export interface AllPopulationResponse extends APIResponse<CountryPopulation[]> { }

export interface CountryPopulationResponse extends APIResponse<CountryPopulation> { }

export interface Flag {
  name: string;
  flag: string;
  iso2: string;
  iso3: string;
}

export interface CountryFlagResponse extends APIResponse<Flag> { }

export interface CountriesInfo {
  name: string;
  currency: string;
  unicodeFlag: string;
  capital: string;
  flag?: string;
  dialCode: string;
}

export interface AllCountriesInfoResponse extends APIResponse<CountriesInfo[]> { }