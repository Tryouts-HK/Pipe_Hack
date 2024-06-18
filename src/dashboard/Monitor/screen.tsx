import React from 'react';
import MonitorScreen from './t';

const data = [
//   { category: 'A', value: 30, color: '#FF6384' },
//   { category: 'B', value: 50, color: '#36A2EB' },
//   { category: 'A', value: 20, color: '#FFCE56' },
//   { category: 'B', value: 40, color: '#FF6384' },
//   { category: 'C', value: 60, color: '#36A2EB' },
{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
{ name: 'Page B', uv: 300, pv: 2400, amt: 2400 },
];

export const Screen: React.FC = () => {
  return (
    <div>
      <MonitorScreen data={data} />
    </div>
  );
};


