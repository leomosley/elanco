import { CountryPopulation } from '@/lib/utils';
import Link from 'next/link';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

interface GroupedCountries {
  [key: string]: CountryPopulation[];
}

export default function Countries({
  countries
}: {
  countries: CountryPopulation[]
}) {
  const groupedCountries = countries.reduce((group, item) => {
    const firstLetter = item.country[0].toUpperCase();
    if (!group[firstLetter]) {
      group[firstLetter] = [];
    }
    group[firstLetter].push(item);
    return group;
  }, {} as GroupedCountries);

  const letters = Object.keys(groupedCountries).sort();

  return (
    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 justify-between">
      {letters.map((letter) => (
        <div key={letter} className="break-inside-avoid mb-4">
          <Label className="text-lg font-medium">{letter}</Label>
          <div className="flex flex-col gap-1.5">
            {groupedCountries[letter].map((item) => (
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
  );
}