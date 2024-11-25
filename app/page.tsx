import Countries from "@/components/home/countries";
import { getAllCountriesPopulations } from "@/lib/fetch";

export default async function Home() {
  const allCountries = await getAllCountriesPopulations();

  return (
    <main className="mx-auto max-w-5xl p-4 pt-14">
      {allCountries ? (
        <Countries countries={allCountries} />
      ) : (
        <div>Loading...</div>
      )}
    </main>
  );
}