"use client"

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { CountryPopulation } from "@/lib/types";

const chartConfig = {
  desktop: {
    label: "Population 1961-2018",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function Chart({
  populationData
}: {
  populationData: CountryPopulation["populationCounts"];
}) {
  return (
    <ChartContainer config={chartConfig}>
      <LineChart
        accessibilityLayer
        data={populationData}
        margin={{
          left: 12,
          right: 12,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="year"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent />}
        />
        <YAxis
          dataKey="value"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => String(value / Math.pow(10, 6)) + "m"}
        />
        <Line
          dataKey="value"
          type="natural"
          stroke="hsl(var(--chart-2))"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ChartContainer>
  );
}
