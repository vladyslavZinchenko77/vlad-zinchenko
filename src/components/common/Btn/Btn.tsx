import { FC, CSSProperties } from 'react';
import './Btn.scss';

interface BtnProps {
  onClick?: () => void;
  children: React.ReactNode;
  isLink: boolean;
  hRef?: string;
  styles?: CSSProperties;
  id?: string;
}

const Btn: FC<BtnProps> = ({ onClick, children, isLink, hRef, styles, id }) => {
  return (
    <>
      {isLink ? (
        <div id={id} className="on-light">
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
        <div id={id} className="on-light">
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
