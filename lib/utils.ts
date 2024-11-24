export interface APIResponse<T = any> {
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

export const getAllPopulations = async () => {
  const response = await fetch("https://countriesnow.space/api/v0.1/countries/population", {
    method: "GET",
    redirect: "follow",
    cache: "force-cache"
  });
  if (response.ok) {
    const d = await response.json() as AllPopulationResponse;
    return d.data;
  }
};

export const getAllCountriesPopulations = async () => {
  const data = await getAllPopulations();
  return data && data.slice(46);
}

export interface CountryPopulationResponse extends APIResponse<CountryPopulation> { }

export const getCountryPopulation = async (country: string) => {
  const response = await fetch("https://countriesnow.space/api/v0.1/countries/population", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      country: country
    }),
    redirect: "follow",
    cache: "force-cache"
  });
  if (response.ok) {
    const d = await response.json() as CountryPopulationResponse;
    return d.data;
  }
};

export interface Flag {
  name: string;
  flag: string;
  iso2: string;
  iso3: string;
}

export interface CountryFlagResponse extends APIResponse<Flag> { }

export const getCountryFlag = async (code: string) => {
  const response = await fetch("https://countriesnow.space/api/v0.1/countries/flag/images", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      iso2: code,
    }),
    redirect: "follow",
    cache: "force-cache"
  });
  if (response.ok) {
    const d = await response.json() as CountryFlagResponse;
    return d.data;
  }
};

export interface CountriesInfo {
  name: string;
  currency: string;
  unicodeFlag: string;
  capital: string;
  flag?: string;
  dialCode: string;
}

export const getAllCountriesInfo = async () => {
  const response = await fetch("https://countriesnow.space/api/v0.1/countries/info?returns=capital,currency,flag,dialCode,unicodeFlag", {
    method: "GET",
    redirect: "follow",
    cache: "force-cache"
  });
  if (response.ok) {
    const d = await response.json() as AllCountriesInfoResponse;
    return d.data;
  }
}

export interface AllCountriesInfoResponse extends APIResponse<CountriesInfo[]> { }

export const getCountryInfo = async (country: string) => {
  const data = await getAllCountriesInfo();
  return data && data.find((item) => item.name === country);
}
