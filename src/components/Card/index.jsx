import React from 'react';
import './index.less';
import { FlowBorder, GradientBorder } from '..';

export default function Card({cardTitle, cardContent, cardWidth, cardPhotoUrl}) {
  let borderWidth = cardWidth ?? 600;
  let GradientBorderHeight = 100;
  let FlowBorderHeight = 400;
  return (
    <div className='card'>
      <div className="words">
        <GradientBorder width={borderWidth} height={GradientBorderHeight}>
            <h3 className='title'>{cardTitle}</h3>
            <p>{cardContent}</p>
        </GradientBorder>
      </div>
      <FlowBorder width={borderWidth} height={FlowBorderHeight} 
        layerImgUrl={`/img/${cardPhotoUrl}`}
      >
      </FlowBorder>
    </div>
  )
}