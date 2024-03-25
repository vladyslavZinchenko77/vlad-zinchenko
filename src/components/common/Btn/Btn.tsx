import { FC } from 'react';
import './Btn.scss';

interface BtnProps {
  onClick?: () => void;
  children: React.ReactNode;
  isLink: boolean;
  hRef?: string;
}

const Btn: FC<BtnProps> = ({ onClick, children, isLink, hRef }) => {
  return (
    <>
      {isLink ? (
        <div className="on-light">
          <a
            href={hRef}
            target="_blank"
            className="link border-gradient border-gradient-purple"
          >
            {children}
          </a>
        </div>
      ) : (
        <div className="on-light">
          <button className="btn border-gradient border-gradient-purple">
            {children}
          </button>
        </div>
      )}
    </>
  );
};

export default Btn;
