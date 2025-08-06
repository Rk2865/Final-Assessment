import React from 'react';

interface FilterInputProps {
  threshold: number;
  setThreshold: (value: number) => void;
}

export const FilterInput: React.FC<FilterInputProps> = ({ threshold, setThreshold }) => {
  return (
    <div className="mb-4">
      <label htmlFor="threshold" className="mr-2">Sales Threshold:</label>
      <input
        id="threshold"
        type="number"
        value={threshold}
        onChange={e => setThreshold(Number(e.target.value))}
        className="border rounded px-2 py-1"
        min={0}
      />
    </div>
  );
};
