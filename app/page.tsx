import { getAllCountriesPopulations } from "@/lib/utils";
import Link from "next/link";

export default async function Home() {
  const allCountries = await getAllCountriesPopulations();

  return (
    <div className="flex flex-col gap-2 p-4">
      {allCountries && allCountries.map((item) => (
        <Link
          key={item.code}
          className=""
          href={item.country}
          prefetch
        >
          {item.country}
        </Link>
      ))}
    </div>
  );
}