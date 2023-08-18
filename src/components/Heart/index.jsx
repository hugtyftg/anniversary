import React from 'react';
// eslint-disable-next-line react/display-name
export const Heart = React.forwardRef((props, ref) => {
  let {size, color, x, y} = props;
  size = Number(size)
  const commonStyle = {
    position: 'absolute',
    left: x ?? 100,
    top: y ?? 100,
    width: size ?? 100,
    height: size ?? 100,
    backgroundColor: color ?? 'lightcoral',
    transform: 'rotate(45deg)',
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
    <div id='heart' className='heart' ref={ref} style={{
      ...commonStyle,
    }}>
      <div id="circle1" className='circle1' style={{
        ...commonStyle,
        ...circle1Style,
      }}></div>
      <div id="circle2" className='circle2' style={{
        ...commonStyle,
        ...circle2Style
      }}></div>
    </div>
  )
})