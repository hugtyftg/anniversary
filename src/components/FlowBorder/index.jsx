// eslint-disable-next-line no-unused-vars
import React from 'react';
import './index.less';
export default function FlowBorder({width, height, layerImgUrl}) {
  const areaWidth = width ?? 300;
  const areaHeight = height ?? 220;
  return (
    <div className='flow-border'
      style={{width: areaWidth, height: areaHeight}}
    >
      <div className="box">
        <div className="layer" style={{
          backgroundImage: `url(${layerImgUrl})`
        }}></div>
      </div>
    </div>
  )
}
