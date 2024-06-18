import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { ChartData, ChartOptions } from 'chart.js';

interface DataPoint {
  category: string;
  value: number;
  color: string;
}

interface MonitorScreenProps {
  data: DataPoint[];
}

const MonitorScreen: React.FC<MonitorScreenProps> = ({ data }) => {
  const [filter, setFilter] = useState<string>('');

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value);
  };

  const filteredData = filter ? data.filter(d => d.category === filter) : data;

  const chartData: ChartData<'bar'> = {
    labels: filteredData.map(d => d.category),
    datasets: [
      {
        label: 'Values',
        data: filteredData.map(d => d.value),
        backgroundColor: filteredData.map(d => d.color),
      },
    ],
  };

  const chartOptions: ChartOptions<'bar'> = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const uniqueCategories = Array.from(new Set(data.map(d => d.category)));

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Monitor Screen</h1>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Filter by Category</label>
        <select
          value={filter}
          onChange={handleFilterChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        >
          <option value="">All Categories</option>
          {uniqueCategories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default MonitorScreen;
