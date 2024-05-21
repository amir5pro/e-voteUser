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
        <XAxis dataKey="gender" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="voters"
          stackId="1"
          stroke="#242f9c"
          fill="#242f9c"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaChartComponent;
