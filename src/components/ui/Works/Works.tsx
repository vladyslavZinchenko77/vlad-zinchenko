'use client';
import { FC, useEffect, useState } from 'react';
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
      <h2 className="works__title">My works</h2>
      {SliderComponent && <SliderComponent />}
    </section>
  );
};

export default Works;
