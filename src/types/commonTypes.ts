import {CSSProperties} from 'react'

export interface TitleProps {
  text: string;
  id: string;
  style?: CSSProperties
}


export interface FingerAnimProps {
  id: string;
}


export interface WorkItemInterface{
    title: string;
    description: string;
    imgUrl: string;
    colorClassName: string;
    projectLink: string;
  }
  

 export  type SocialsType = {
    icon: React.ReactNode;
    url: string;
  };


export type ContactItemType = {
  icon: React.ReactNode; 
  title: string; 
  text: string;
}