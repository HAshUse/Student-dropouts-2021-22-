import React from "react";
import {
  XAxis,
  YAxis,
  ResponsiveContainer,
  BarChart,
  Tooltip,
  Legend,
  Bar,
  CartesianGrid
} from "recharts";

export default function DropoutChart({ data, boysKey, girlsKey, level }) {
  return (
    <div>
      <ResponsiveContainer width="100%" height={520}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 25, bottom: 55 }}
        >
          {/* Grid for readability */}
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="state_ut"
            tick={{ fontSize: 10 }}
            angle={-45}
            textAnchor="end"
          // interval={1}
          />
          <YAxis
            tickFormatter={(value) => `${value}%`}
          />
          {/* Tooltip with % */}
          <Tooltip
            formatter={(value) => `${value}%`}
          />

          <Legend verticalAlign="bottom"
            align="center"
            wrapperStyle={{ paddingTop: 50 }} />

          <Bar
            dataKey={boysKey}
            fill="#3b82f6"
            radius={[6, 6, 0, 0]}
            name={`${level} Boys`}
          />

          <Bar
            dataKey={girlsKey}
            fill="#dc2626"
            radius={[6, 6, 0, 0]}
            name={`${level} Girls`}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
