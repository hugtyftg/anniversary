import React, { useRef } from 'react';
import Glass from '../Glass';
import './index.less';
export default function WelcomeBoard(props) {
  const boardRef = useRef(null);
  const {title, btnInfo} = props;
  const clickHandler = () => {
    let currentClassName = boardRef.current.className;
    if (!/fade/.test(currentClassName)) {
      boardRef.current.className += ' fade';      
      console.log(boardRef.current.className)
    }
  }
  return (
    <div className='welcome-board' ref={boardRef}>
      <Glass>
        <h2>{title}</h2>
        <input type="button" onClick={clickHandler} id='start' value={btnInfo}/>
      </Glass>
    </div>
  )
}
