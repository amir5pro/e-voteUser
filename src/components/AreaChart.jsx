import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const AreaChartComponent = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="maleVotes"
          stackId="1"
          stroke="#242f9c"
          fill="#242f9c"
        />
        <Area
          type="monotone"
          dataKey="femaleVotes"
          stackId="1"
          stroke="#b5c1ff"
          fill="#b5c1ff"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaChartComponent;
