import { FC, CSSProperties } from 'react';
import './Btn.scss';

interface BtnProps {
  onClick?: () => void;
  children: React.ReactNode;
  isLink: boolean;
  hRef?: string;
  styles?: CSSProperties;
}

const Btn: FC<BtnProps> = ({ onClick, children, isLink, hRef, styles }) => {
  return (
    <>
      {isLink ? (
        <div className="on-light">
          <a
            style={styles}
            href={hRef}
            target="_blank"
            className="link border-gradient border-gradient-purple"
          >
            {children}
          </a>
        </div>
      ) : (
        <div className="on-light">
          <button
            style={styles}
            className="btn border-gradient border-gradient-purple"
          >
            {children}
          </button>
        </div>
      )}
    </>
  );
};

export default Btn;
