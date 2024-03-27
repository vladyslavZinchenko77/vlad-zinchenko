import React, { FC } from 'react';
import { WorkItemInterface } from '@/types/commonTypes';
import Image from 'next/image';

import './WorksItem.scss';

const WorkItem: FC<WorkItemInterface> = ({
  title,
  description,
  imgUrl,
  colorClassName,
  projectLink,
}) => {
  return (
    <a href={projectLink} target="_blank" style={{ textDecoration: 'none' }}>
      <div className={`work-item ${colorClassName}`}>
        <h2 className="work-item__title">{title}</h2>
        <p className="work-item__desc">{description}</p>
        <div className="work-item__img-wrap">
          <Image
            className="work-item__img"
            src={imgUrl}
            alt={title}
            width={1110}
            height={660}
          />
        </div>
      </div>
    </a>
  );
};

export default WorkItem;
