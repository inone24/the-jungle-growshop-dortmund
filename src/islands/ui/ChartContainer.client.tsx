import * as React from "react";
import * as R from "recharts";

export function LineChartIsland({ data, xKey = "name", yKey = "value" }: { data: any[]; xKey?: string; yKey?: string }) {
  return (
    <R.ResponsiveContainer width="100%" height={260}>
      <R.LineChart data={data}>
        <R.CartesianGrid strokeDasharray="3 3" />
        <R.XAxis dataKey={xKey} />
        <R.YAxis />
        <R.Tooltip />
        <R.Legend />
        <R.Line type="monotone" dataKey={yKey} stroke="#4A6741" strokeWidth={2} />
      </R.LineChart>
    </R.ResponsiveContainer>
  );
}
