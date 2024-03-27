'use client';
import { FC, useEffect, useState } from 'react';

import Title from '@/components/common/Title/Title';
import FingerAnimation from '@/components/common/FingerAnimation/FingerAnimation';
import './Works.scss';

const Works: FC = () => {
  const [SliderComponent, setSliderComponent] = useState<React.FC | null>(null);

  useEffect(() => {
    const loadSliderComponent = async () => {
      const module = await import('./SliderComponent');
      setSliderComponent(() => module.default);
    };

    loadSliderComponent();
  }, []);

  return (
    <section className="works">
      <Title text="projects" />
      {SliderComponent && <SliderComponent />}
      <FingerAnimation />
    </section>
  );
};

export default Works;
