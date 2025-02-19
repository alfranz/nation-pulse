"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

interface ChartProps {
  data: any[]
  xField: string
  yField: string
  title?: string
  description?: string
  source?: {
    name: string
    url: string
  }
}

export function Chart({ data, xField, yField, title, description, source }: ChartProps) {
  return (
    <div className="p-4 space-y-4">
      {title && <h3 className="text-lg font-semibold">{title}</h3>}
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <XAxis
              dataKey={xField}
              type="number"
              domain={["dataMin", "dataMax"]}
              stroke="hsl(var(--foreground))"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              width={60}
            />
            <YAxis
              stroke="hsl(var(--foreground))"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              width={60}
            />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="rounded-lg border bg-background p-2 shadow-sm">
                      <div className="grid grid-cols-2 gap-2">
                        <span className="font-medium">{xField}:</span>
                        <span className="font-medium">{payload[0].payload[xField]}</span>
                        <span className="font-medium">{yField}:</span>
                        <span className="font-medium">
                          {payload[0].payload[yField].toFixed(2)}
                        </span>
                      </div>
                    </div>
                  )
                }
                return null
              }}
            />
            <Line
              type="monotone"
              dataKey={yField}
              strokeWidth={2}
              stroke="hsl(var(--primary))"
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      {(description || source) && (
        <div className="border-t pt-4 space-y-2">
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
          {source && (
            <p className="text-xs text-muted-foreground">
              Source:{" "}
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground transition-colors"
              >
                {source.name}
              </a>
            </p>
          )}
        </div>
      )}
    </div>
  )
}