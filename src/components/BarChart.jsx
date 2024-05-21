import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const BarChartComponent = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 50 }}>
        <CartesianGrid strokeDasharray="3 3 " />
        <XAxis
          dataKey="name"
          label={{ value: "name", position: "insideBottom", offset: -10 }}
        />
        <YAxis
          allowDecimals={false}
          label={{ value: "Votes", angle: -90, position: "insideLeft" }}
        />
        <Tooltip />
        <Bar dataKey="Votes" barSize={10} fill="#242f9c">
          {data.map((entry, index) => (
            <Bar key={`bar-${index}`} dataKey="votes" />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;
