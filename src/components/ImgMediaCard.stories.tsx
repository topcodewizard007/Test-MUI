import React from 'react';
import { ImgMediaCard }  from './ImgMediaCard';

export default{
  
  title: 'Flood zone 3',
  component: ImgMediaCard
}

const text ="primary card"
export const Primary = () => 
    <ImgMediaCard label='primary'>{text}</ImgMediaCard>