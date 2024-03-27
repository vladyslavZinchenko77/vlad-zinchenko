import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import WorkIcon from '@mui/icons-material/Work';
import Typography from '@mui/material/Typography';

import Image from 'next/image';

const workExperience = [
  {
    position: 'Architect & CG Artist',
    company: 'ART Building',
    duration: 'August 2015 - September 2019',
  },
  {
    position: 'CG Artist',
    company: 'Archiline',
    duration: 'September 2019 - September 2021',
  },
  {
    position: 'Front End Developer',
    company: 'Archiline',
    duration: 'May 2021 - February 2023',
  },
  {
    position: 'Front End Developer',
    company: 'BN Digital',
    duration: 'May 2023 - October 2023',
  },
];

const CustomizedTimeline = () => {
  return (
    <Timeline position="alternate">
      {workExperience.map((experience, index) => (
        <TimelineItem key={index}>
          <TimelineSeparator>
            <TimelineDot>
              <WorkIcon />
            </TimelineDot>
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
