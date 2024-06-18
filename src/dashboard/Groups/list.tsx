// src/components/GroupList.tsx
import React from 'react';
import { Group } from './groups.interfaces';
import GroupItem from './groupitem';


interface GroupListProps {
  groups: Group[];
  view: 'list' | 'grid';
  onSelectGroup: (group: Group) => void;
}

const GroupList: React.FC<GroupListProps> = ({ groups, view, onSelectGroup }) => {
  return (
    <div className={`grid gap-4 ${view === 'grid' ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4' : 'flex flex-col'}`}>
      {groups.map((group) => (
        <GroupItem key={group.id} group={group} onSelectGroup={onSelectGroup} />
      ))}
    </div>
  );
};

export default GroupList;
