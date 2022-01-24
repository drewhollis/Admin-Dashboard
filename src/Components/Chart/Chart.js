import React from "react";
import "./Chart.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Chart = ({ title, salesData, dataKey, grid }) => {
  const data = [
    {
      name: "Jan",
      Sales: 4000,
    },
    {
      name: "Feb",
      Sales: 3000,
    },
    {
      name: "Mar",
      Sales: 8000,
    },
    {
      name: "Apr",
      Sales: 7000,
    },
    {
      name: "May",
      Sales: 5000,
    },
    {
      name: "Jun",
      Sales: 4000,
    },
    {
      name: "Jul",
      Sales: 9000,
    },
    {
      name: "Aug",
      Sales: 10000,
    },
    {
      name: "Sep",
      Sales: 4000,
    },
    {
      name: "Oct",
      Sales: 8000,
    },
    {
      name: "Nov",
      Sales: 11000,
    },
    {
      name: "Dec",
      Sales: 14000,
    },
  ];

  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550BD" />
          <YAxis dataKey="Sales" stroke="#5550BD" />
          <Line type="monotone" dataKey={dataKey} stroke="#5550BD" />
          <Tooltip />
          <Legend />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
