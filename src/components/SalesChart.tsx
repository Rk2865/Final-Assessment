import React from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export type ChartType = 'bar' | 'line' | 'pie';

export interface SalesData {
  year: number;
  sales: number;
}

interface SalesChartProps {
  data: SalesData[];
  chartType: ChartType;
  threshold: number;
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

export const SalesChart: React.FC<SalesChartProps> = ({ data, chartType, threshold }) => {
  const filteredData = data.filter(d => d.sales >= threshold);

  if (chartType === 'bar') {
    return (
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={filteredData}>
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="sales" fill="#0088FE" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
  if (chartType === 'line') {
    return (
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={filteredData}>
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="sales" stroke="#00C49F" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
  if (chartType === 'pie') {
    return (
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie data={filteredData} dataKey="sales" nameKey="year" cx="50%" cy="50%" outerRadius={100} label>
            {filteredData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    );
  }
  return null;
};
