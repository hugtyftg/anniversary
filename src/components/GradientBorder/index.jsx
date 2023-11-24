import React from 'react';
import './index.less';
export default function index({width, height, children}) {
  const areaWidth = width ?? 300;
  const areaHeight = height ?? 300;
  return (
    <div className='gradient-border' 
      style={{width: areaWidth, height: areaHeight}}
    >
      <div className="box">
        {children}
      </div>
    </div>
  )
}