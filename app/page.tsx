import Countries from "@/components/home/countries";
import { getAllCountriesPopulations } from "@/lib/utils";

export default async function Home() {
  const allCountries = await getAllCountriesPopulations();

  return (
    <main className="p-4 pt-14">
      {allCountries ? (
        <Countries countries={allCountries} />
      ) : (
        <div>Loading...</div>
      )}
    </main>
  );
}