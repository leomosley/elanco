import { Chart } from "@/components/country/chart";
import { getCountryInfo, getCountryPopulation } from "@/lib/utils";
import Image from "next/image";

export default async function CountryPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const country = decodeURI(slug);
  const info = await getCountryInfo(country);
  const population = await getCountryPopulation(country);

  return (population && info) && (
    <main className="flex mx-auto md:max-w-5xl justify-between gap-2 p-2 pt-14">
      <section className="w-4/5">
        <div className="flex h-32">
          <div className="h-28 w-fit my-auto border rounded-lg shadow-sm bg-muted">
            {info?.flag ? (
              <Image
                className="w-full h-full object-fill rounded-lg"
                src={info.flag}
                width={100}
                height={100}
                alt={info.unicodeFlag}
                quality={80}
              />
            ) : (
              <span className="text-2xl text-muted-foreground">{info.unicodeFlag}</span>
            )}
          </div>
          <div className="my-auto p-2">
            <h1 className="text-3xl tracking-tight leading-none">{country}</h1>
            <span className="text-muted-foreground">{population?.code}</span>
          </div>
        </div>
        <div>
          <Chart populationData={population.populationCounts} />
        </div>
      </section>
      <aside className="flex-1 rounded-lg shadow-sm p-4 border">
        <div className="flex flex-col gap-1">
          <span className="leading-snug">Capital</span>
          <span className="text-sm">{info.capital}</span>
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="leading-tight">Currency</span>
          <span className="text-sm">{info.currency}</span>
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="leading-tight">Dial Code</span>
          <span className="text-sm">{info.dialCode}</span>
        </div>
      </aside>
    </main>
  );
}