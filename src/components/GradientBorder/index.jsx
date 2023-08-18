import React from 'react';
import './index.less';
export default function index({width, height}) {
  const areaWidth = width ?? 300;
  const areaHeight = height ?? 300;
  return (
    <div className='gradient-border' 
      style={{width: areaWidth, height: areaHeight}}
    >
      <div className="box">
      
      </div>
    </div>
  )
}
