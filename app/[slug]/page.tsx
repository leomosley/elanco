import { getCountryInfo, getCountryPopulation } from "@/lib/utils";

export default async function CountryPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const country = decodeURI(slug);
  const info = await getCountryInfo(country);
  const population = await getCountryPopulation(country);

  return (info && population) && (
    <div>
      {JSON.stringify(info)}
      {JSON.stringify(population)}
    </div>
  );
}