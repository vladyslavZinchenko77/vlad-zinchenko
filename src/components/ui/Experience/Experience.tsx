import { FC } from 'react';
import CustomizedTimeline from './CustomizedTimeline';
import Title from '@/components/common/Title/Title';

const Experience: FC = () => {
  return (
    <div>
      <Title text={'Experience'} />
      <h2>Experience</h2> <CustomizedTimeline />
    </div>
  );
};

export default Experience;
