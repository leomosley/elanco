"use cache";

import { AllCountriesInfoResponse, AllPopulationResponse, CountryFlagResponse, CountryPopulationResponse } from "./types";

export const getAllPopulations = async () => {
  const response = await fetch("https://countriesnow.space/api/v0.1/countries/population", {
    method: "GET",
    redirect: "follow",
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
  });
  if (response.ok) {
    const d = await response.json() as CountryPopulationResponse;
    return d.data;
  }
};

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
  });
  if (response.ok) {
    const d = await response.json() as CountryFlagResponse;
    return d.data;
  }
};

export const getAllCountriesInfo = async () => {
  const response = await fetch("https://countriesnow.space/api/v0.1/countries/info?returns=capital,currency,flag,dialCode,unicodeFlag", {
    method: "GET",
    redirect: "follow",
  });
  if (response.ok) {
    const d = await response.json() as AllCountriesInfoResponse;
    return d.data;
  }
}

export const getCountryInfo = async (country: string) => {
  const data = await getAllCountriesInfo();
  return data && data.find((item) => item.name === country);
}
