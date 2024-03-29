import { FC } from 'react';
import CustomizedTimeline from './CustomizedTimeline';

import Title from '@/components/common/Title/Title';

import './Experience.scss';

const Experience: FC = () => {
  return (
    <section className="experience">
      <Title id="experience-title" text={'Experience'} />
      <CustomizedTimeline />
    </section>
  );
};

export default Experience;
