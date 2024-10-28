import React from "react";
import {
  Line,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-purple-600 text-white px-3 py-2 rounded-full text-sm font-bold">
        {`${parseFloat(payload[0].value).toFixed(4)}L`}
      </div>
    );
  }
  return null;
};

export default function Chart({ apiData }) {
  return (
    <div className="h-[300px] mt-8">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={apiData.reverse()}>
          <XAxis
            dataKey="resDate"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#6b7280", fontSize: 12 }}
            tickFormatter={(value) =>
              new Date(value).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              })
            }
          />
          <YAxis
            dataKey="close"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#6b7280", fontSize: 12 }}
            tickFormatter={(value) => `${parseFloat(value).toFixed(2)}L`}
            domain={["dataMin", "dataMax"]}
          />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="close"
            stroke="#4ade80"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 8, fill: "#4ade80", stroke: "#fff" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
