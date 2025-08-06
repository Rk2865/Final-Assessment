import React from 'react';
import { ChartType } from './SalesChart';

interface ChartSwitcherProps {
  chartType: ChartType;
  setChartType: (type: ChartType) => void;
}

export const ChartSwitcher: React.FC<ChartSwitcherProps> = ({ chartType, setChartType }) => {
  return (
    <div className="flex gap-2 mb-4">
      {['bar', 'line', 'pie'].map(type => (
        <button
          key={type}
          onClick={() => setChartType(type as ChartType)}
          className={`px-4 py-2 rounded border ${chartType === type ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'}`}
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </button>
      ))}
    </div>
  );
};
