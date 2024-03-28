import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import WorkIcon from '@mui/icons-material/Work';
import bnLogo from '../../../../public/img/bn.png';
import Image from 'next/image';
import archilineLogo from '../../../../public/svg/logo-white.svg';

interface Experience {
  position: string;
  company: string;
  duration: string;
  icon: JSX.Element;
}

const workExperience: Experience[] = [
  {
    position: 'Architect & CG Artist',
    company: 'ART Building',
    duration: 'August 2015 - September 2019',
    icon: <WorkIcon />,
  },
  {
    position: 'CG Artist',
    company: 'Archiline',
    duration: 'September 2019 - September 2021',
    icon: <Image src={archilineLogo} alt="archiline" width={30} height={30} />,
  },
  {
    position: 'Front End Developer',
    company: 'Archiline',
    duration: 'May 2021 - February 2023',
    icon: <Image src={archilineLogo} alt="archiline" width={30} height={30} />,
  },
  {
    position: 'Front End Developer',
    company: 'BN Digital',
    duration: 'May 2023 - October 2023',
    icon: <Image src={bnLogo} alt="bn-digital" width={30} height={30} />,
  },
];

const CustomizedTimeline: React.FC = () => {
  return (
    <Timeline position="alternate">
      {workExperience.map((experience, index) => (
        <TimelineItem key={index}>
          <TimelineSeparator>
            <TimelineDot>{experience.icon}</TimelineDot>
            {index < workExperience.length - 1 && <TimelineConnector />}
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" component="span">
              {experience.position}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {experience.company} | {experience.duration}
            </Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default CustomizedTimeline;
