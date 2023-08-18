import React from 'react';
export default function Heart(props) {
  let {size, color, showHeart} = props;
  
  size = Number(size)
  const commonStyle = {
    position: 'absolute',
    left: 100,
    top: 100,
    width: size ?? 100,
    height: size ?? 100,
    backgroundColor: color ?? 'lightcoral',
    transform: 'rotate(45deg)'
  }
  const circle1Style = {
    position: 'absolute',
    top: 0,
    left: size ? -size / 2 : -50,
    borderRadius: '50%',
  }
  const circle2Style = {
    position: 'absolute',
    left: 0,
    top: size ? -size / 2: -50,
    borderRadius: '50%',
  }
  return (
    <div id='heart' style={{
      ...commonStyle,
      
    }}>
      <div id="circle1" style={{
        ...commonStyle,
        ...circle1Style,
      }}></div>
      <div id="circle2" style={{
        ...commonStyle,
        ...circle2Style
      }}></div>
    </div>
  )
}
