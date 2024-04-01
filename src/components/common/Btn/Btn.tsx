// import { FC, CSSProperties } from 'react';
// import './Btn.scss';

// interface BtnProps {
//   onClick?: () => void;
//   children: React.ReactNode;
//   isLink: boolean;
//   href?: string;
//   styles?: CSSProperties;
//   id?: string;
// }

// const Btn: FC<BtnProps> = ({ onClick, children, isLink, href, styles, id }) => {
//   return (
//     <>
//       {isLink ? (
//         <div id={id} className="on-light">
//           <a
//             style={styles}
//             href={href}
//             target="_blank"
//             className="link border-gradient border-gradient-purple"
//           >
//             {children}
//           </a>
//         </div>
//       ) : (
//         <div id={id} className="on-light">
//           <button
//             style={styles}
//             className="btn border-gradient border-gradient-purple"
//           >
//             {children}
//           </button>
//         </div>
//       )}
//     </>
//   );
// };

// export default Btn;

import { FC, CSSProperties, ReactNode } from 'react';
import './Btn.scss';

interface BtnProps {
  onClick?: () => void;
  children: ReactNode;
  isLink: boolean;
  href?: string;
  styles?: CSSProperties;
  id: string;
}

const Btn: FC<BtnProps> = ({ onClick, children, isLink, href, styles, id }) => {
  const ButtonElement = isLink ? 'a' : 'button';

  return (
    <div className="on-light">
      <ButtonElement
        id={id}
        style={styles}
        href={isLink ? href : undefined}
        target={isLink ? '_blank' : undefined}
        onClick={onClick}
        className={`btn border-gradient border-gradient-purple ${
          isLink ? 'link' : ''
        }`}
      >
        {children}
      </ButtonElement>
    </div>
  );
};

export default Btn;
