
import React from 'react';
import { Group } from './groups.interfaces';


interface GroupItemProps {
  group: Group;
  onSelectGroup: (group: Group) => void;
}

const GroupItem: React.FC<GroupItemProps> = ({ group, onSelectGroup }) => {
  return (
    <div className="p-4 border rounded" onClick={() => onSelectGroup(group)}>
      <h2 className="text-lg font-bold">{group.name}</h2>
      <p className="text-sm">{group.description}</p>
      {group.pollingUnit && <p className="text-sm">Polling Unit: {group.pollingUnit}</p>}
      {group.lga && <p className="text-sm">LGA: {group.lga}</p>}
      {group.state && <p className="text-sm">State: {group.state}</p>}
    </div>
  );
};

export default GroupItem;
