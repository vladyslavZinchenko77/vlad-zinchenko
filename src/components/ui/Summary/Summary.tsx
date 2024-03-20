import { FC } from 'react';
import Image from 'next/image';

import './Summary.scss';

const Summary: FC = () => {
  return (
    <section className="summary">
      <h2 className="summary__tittle">summary</h2>
      <div className="summary__container">
        <div className="summary__content">
          <p className="summary__content-text">
            Hi!👋🏻 I am Frontend Developer. The main framework I work with is
            React, but if necessary, I'm not afraid of learning something new.
            When writing code, I use TypeScript. I also have experience working
            with the CMS Strapi. I know how to work in a team, am able to make
            the right decisions quickly, have a deeply analytical mindset,
            sociable, fast learner.
          </p>

          <Image
            className="summary__content-img"
            src="/img/avatar2.png"
            alt="avatar"
            width={431}
            height={659}
          />
        </div>
      </div>
    </section>
  );
};

export default Summary;
