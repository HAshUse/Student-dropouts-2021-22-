import React from 'react'
import { XAxis,YAxis,ResponsiveContainer,BarChart,Tooltip,Legend,Bar } from 'recharts'

export default function DropoutChart({ data, boysKey, girlsKey, level }) {
  return (
    <div>
      <ResponsiveContainer minWidth="100%" height={400}>
        <BarChart data={data}>
          <XAxis dataKey="state_ut" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey={boysKey} fill="#3b82f6" name={`${level} Boys`} />
          <Bar dataKey={girlsKey} fill='rgba(221, 27, 27, 1)' name={`${level} Girls`} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
