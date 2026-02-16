"use client";

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type DailyCount = {
  date: string;
  count: number;
};

const chartConfig = {
  count: {
    label: "Signups",
    color: "#2563EB",
  },
} satisfies ChartConfig;

function formatDate(dateStr: string) {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

export function SignupsChart({ data }: { data: DailyCount[] }) {
  const total = data.reduce((sum, d) => sum + d.count, 0);

  return (
    <Card className="glass-strong border-0 rounded-2xl">
      <CardHeader className="pb-2">
        <CardTitle className="font-display font-bold text-gray-900">
          Signups Over Time
        </CardTitle>
        <CardDescription>
          Last 30 days &middot;{" "}
          <span className="font-medium text-gray-700">{total}</span> total
        </CardDescription>
      </CardHeader>
      <CardContent>
        {data.length === 0 ? (
          <p className="text-sm text-gray-400 text-center py-8">No data yet</p>
        ) : (
          <ChartContainer config={chartConfig} className="h-56 w-full">
            <AreaChart
              accessibilityLayer
              data={data}
              margin={{ top: 8, right: 8, bottom: 0, left: -12 }}
            >
              <defs>
                <linearGradient id="fillSignups" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--color-count)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="var(--color-count)" stopOpacity={0.02} />
                </linearGradient>
              </defs>

              <CartesianGrid vertical={false} />

              <XAxis
                dataKey="date"
                tickFormatter={formatDate}
                tickLine={false}
                axisLine={false}
                tickMargin={10}
                interval={Math.ceil(data.length / 7) - 1}
              />

              <YAxis
                allowDecimals={false}
                axisLine={false}
                tickLine={false}
                tickMargin={8}
              />

              <ChartTooltip
                content={
                  <ChartTooltipContent
                    labelFormatter={(value) => formatDate(value as string)}
                    indicator="line"
                  />
                }
                cursor={{ stroke: "var(--color-count)", strokeWidth: 1, strokeDasharray: "4 4", strokeOpacity: 0.3 }}
              />

              <Area
                type="natural"
                dataKey="count"
                stroke="var(--color-count)"
                strokeWidth={2.5}
                fill="url(#fillSignups)"
                dot={false}
                activeDot={{
                  r: 5,
                  stroke: "var(--color-count)",
                  strokeWidth: 2,
                  fill: "#fff",
                }}
              />
            </AreaChart>
          </ChartContainer>
        )}
      </CardContent>
    </Card>
  );
}
