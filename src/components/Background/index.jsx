import React, { useEffect, useRef } from 'react';
import './index.less';
import Parallax from 'parallax-js';
export default function Background() {
  const sceneRef = useRef(null);
  // DOM挂载完毕之后获取元素并添加parallax实例
  useEffect(() => {
    const scene = sceneRef.current;
    const parallaxIns = new Parallax(scene);
  }, [])
  return (
    <div className='background'>
      <div className="container">
        <div className="scene" id='scene' ref={sceneRef}>
          <div className="layer" data-depth-x="-0.5" id="moon"><img src={'/img/moon.png'} alt="moon" /></div>
          <div className="layer" data-depth-x="0.8" id="cloud"><img src={'/img/cloud.png'} alt="cloud" /></div>
        </div>
      </div>
    </div>
  )
}
