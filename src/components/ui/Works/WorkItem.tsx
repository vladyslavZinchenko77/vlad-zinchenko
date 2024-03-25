import React, { FC } from 'react';

import Image from 'next/image';

// import work1 from '/img/work9.png';

import work1 from '../../../../public/img/work9.png';

import './WorksItem.scss';

interface WorkItemProps {}

const WorkItem: FC<WorkItemProps> = ({}) => {
  return (
    <a href="">
      <div className="work-item">
        <h2>Title</h2>
        <p>Description</p>
        <div className="work-item__img-wrap">
          <Image
            className="work-item__img"
            src={work1}
            alt="i-step"
            width={1110}
            height={660}
          />
        </div>
      </div>
    </a>
  );
};

export default WorkItem;
