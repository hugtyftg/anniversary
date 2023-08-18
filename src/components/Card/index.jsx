import React from 'react';
import './index.less';
import { FlowBorder } from '..';

export default function Card() {
  return (
    <div className='card'>
      <FlowBorder layerImgUrl={'src/assets/img/photo.jpg'}>
      </FlowBorder>
    </div>
  )
}