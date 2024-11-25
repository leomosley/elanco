"use client";

import { CountryPopulation } from '@/lib/types';
import Link from 'next/link';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Search } from './search';

interface GroupedCountries {
  [key: string]: CountryPopulation[];
}

export default function Countries({
  countries
}: {
  countries: CountryPopulation[]
}) {
  const [filter, setFilter] = useState('');

  const groupedCountries = countries.reduce((group, item) => {
    const firstLetter = item.country[0].toUpperCase();
    if (!group[firstLetter]) {
      group[firstLetter] = [];
    }
    group[firstLetter].push(item);
    return group;
  }, {} as GroupedCountries);

  const filteredGroupedCountries = () => {
    if (!filter) return groupedCountries;

    const filtered: Record<string, CountryPopulation[]> = {}
    Object.entries(groupedCountries).forEach(([letter, countries]) => {
      const filteredCountries = countries.filter(country =>
        country.country.toLowerCase().includes(filter.toLowerCase())
      )
      if (filteredCountries.length > 0) {
        filtered[letter] = filteredCountries;
      }
    })
    return filtered;
  }
  const filtered = filteredGroupedCountries();

  const letters = Object.keys(filtered).sort();

  return (
    <div>
      <div className="flex flex-col w-fit mb-2">
        <h1 className="font-semibold text-lg">Search for a country</h1>
        <Search value={filter} onChange={setFilter} />
      </div>
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 justify-between">
        {letters.map((letter) => (
          <div key={letter} className="break-inside-avoid mb-4">
            <Label className="text-lg font-medium">{letter}</Label>
            <div className="flex flex-col gap-1.5">
              {filtered[letter].map((item) => (
                <Link
                  key={item.code}
                  className="group max-w-fit"
                  href={item.country}
                  prefetch
                >
                  <Button
                    className="px-4 rounded-full"
                    variant="outline"
                    size="sm"
                  >
                    {item.country}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}