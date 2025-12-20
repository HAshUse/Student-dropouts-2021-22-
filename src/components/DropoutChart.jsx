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
      <ResponsiveContainer width="100%" height={420}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 10, bottom: 80 }}
        >
          {/* Grid for readability */}
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis
            dataKey="state_ut"
            tick={{ fontSize: 11 }}
            // angle={-45}
            // textAnchor="end"
            // interval={2}
          />

          <YAxis
            tickFormatter={(value) => `${value}%`}
          />

          {/* Tooltip with % */}
          <Tooltip
            formatter={(value) => `${value}%`}
          />

          <Legend />

          <Bar
            dataKey={boysKey}
            fill="#3b82f6"
            name={`${level} Boys`}
            radius={[6, 6, 0, 0]}
          />

          <Bar
            dataKey={girlsKey}
            fill="#dc2626"
            name={`${level} Girls`}
            radius={[6, 6, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
