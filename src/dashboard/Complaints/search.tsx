import React, { useState } from 'react';
import Select from 'react-select';

interface PollingUnit {
  code: string;
  name: string;
}

interface PollingUnitSearchProps {
  pollingUnits: PollingUnit[];
  onSelect: (unit: PollingUnit) => void;
}

const PollingUnitSearch: React.FC<PollingUnitSearchProps> = ({ pollingUnits, onSelect }) => {
  const options = pollingUnits.map(unit => ({ value: unit.code, label: `${unit.name} (${unit.code})` }));

  return (
    <Select
      options={options}
      onChange={(selectedOption: any) => {
        if (selectedOption) onSelect(selectedOption as any);
      }}
      placeholder="Search for polling unit..."
    />
  );
};

export default PollingUnitSearch;
