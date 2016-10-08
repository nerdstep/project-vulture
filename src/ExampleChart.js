import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts'
import Box from './Box'

const data = [
  {name: 'A', uv: 4000, pv: 2400, amt: 2400},
  {name: 'B', uv: 3000, pv: 1398, amt: 2210},
  {name: 'C', uv: 2000, pv: 9800, amt: 2290},
  {name: 'D', uv: 2780, pv: 3908, amt: 2000},
  {name: 'E', uv: 1890, pv: 4800, amt: 2181},
  {name: 'F', uv: 2390, pv: 3800, amt: 2500},
];

const ExampleChart = () =>
  <Box>
    <ResponsiveContainer>
      <LineChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
        <XAxis dataKey="name"/>
        <YAxis/>
        <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  </Box>

export default ExampleChart
