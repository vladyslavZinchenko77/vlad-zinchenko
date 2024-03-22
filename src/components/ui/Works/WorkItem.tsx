import React, { FC } from 'react';

import './WorksItem.scss';

interface WorkItemProps {
  children: React.ReactNode;
}

const WorkItem: FC<WorkItemProps> = ({ children }) => {
  return <div className="workI-item">{children}</div>;
};

export default WorkItem;
