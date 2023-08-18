import React, { useRef } from 'react';
import './index.less';
import { FlowBorder, GradientBorder } from '../../components';
import Background from '../../components/Background';
import WelcomeBoard from '../../components/WelcomeBoard';
import Heart from '../../components/Heart';
export default function Login() {
  const heartRef = useRef(null);
  const showHeart = (heartDOM) => {
    console.log(heartDOM);
  }
  return (
    <div className='login' onClick={showHeart}>
      <Background/>
      <div className="welcome">
        <WelcomeBoard 
          title={'Welcome to World of MMY & SYY!'}
          btnInfo={'Start Roaming!'}
        />
      </div>
      <Heart size={25} color='lightcoral' showHeart={showHeart}/>
      {/* <div className="tset" style={{
        width: 100,
        height: 100,
        backgroundColor: 'black',
        position: 'absolute',
        left: 0,
        top: 0,
      }}></div> */}
      {/* <FlowBorder/>
      <GradientBorder/> */}
    </div>
  )
}
