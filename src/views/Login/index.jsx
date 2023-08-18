import React, { useEffect, useRef, useState } from 'react';
import './index.less';
import Background from '../../components/Background';
import WelcomeBoard from '../../components/WelcomeBoard';
import {Heart} from '../../components/Heart';
import { flushSync } from 'react-dom';
import PubSub from 'pubsub-js';
import Card from '../../components/Card';
export default function Login() {
  // 显示card
  let [cardOpacity, setCardOpacity] = useState(0);
  const token = PubSub.subscribe('showCard', (msg, data) => {
    if (data === true) {
      setCardOpacity(1);
    }
  })
  // heart相关状态
  const pageRef = useRef(null);
  const heartColors = ['lightcoral', 'pink', 'red', 'orange', 'yellow', 'lightgreen', 'lightblue', 'lightpurple'];
  const heartRef = useRef(null);
  let [existHeart, setExistHeart] = useState(false);
  let [heartX, setHeartX] = useState(0);
  let [heartY, setHeartY] = useState(0);
  let [heartColor, setHeartColor] = useState(heartColors[0]);
  let [heartMove, setHeartMove] = useState(false);
  let heartSize = 25;
  // 创建一个heart
  const createHeart = (e) => {
    // 由于只有一个heart，所以节流，有heart在移动的时候，点击页面不会对当前移动的heart产生影响
    if (!heartMove) {
      let offsetX = heartSize * 0.5
      let offsetY = heartSize * (1.4142*1.5 - 0.5);
      let mouseX = e.pageX - offsetX;
      let mouseY = e.pageY - offsetY;
      // 同步更新所有的state，使得heart可见
      flushSync(() => {
        let colorIndex = Math.floor(Math.random() * (heartColors.length));
        setHeartColor(heartColors[colorIndex]);
        setHeartX(mouseX);
        setHeartY(mouseY);
        setExistHeart(true);
        setHeartMove(true);
      })
      // heart向上移动且逐渐消失的动画
      heartAnimation(heartRef.current, 100, 1, 5);
    }
  }
  let heartAnimationTimer = useRef(null);
  /**
   * 心向上移动且且逐渐消失的动画
   * @param {HTMLElement} heartDOM  心的DOM
   * @param {number} totalDistance 心总共移动的垂直距离
   * @param {number} totalTime 动画总秒数
   * @param {number} stepTime 动画每一步的毫秒数
   */
  const heartAnimation = (heartDOM, totalDistance, totalTime, stepTime) => {
    // totalTime内移动totalDistance px的情况下，
    let iterations = totalTime * 1000 / stepTime; // 总迭代次数
    let currentIter = 0; // 当前已迭代次数
    let stepDistance = totalDistance / iterations; // 每次移动的距离步长
    let currentY = heartDOM.offsetTop; // 当前heart的offsetTop
    let stepOpacity = 1 / iterations; // 透明度变化步长
    heartDOM.style.opacity = 1; // 初始化透明度为1
    // 移动动画的节流
    if (!heartAnimationTimer.current) {
      heartAnimationTimer.current = setInterval(() => {
        if (currentIter !== iterations) {
          heartDOM.style.opacity -= stepOpacity;
          currentY -= stepDistance;
          heartDOM.style.top = `${currentY}px`
          currentIter++;
        } else {
          clearInterval(heartAnimationTimer.current);
          heartAnimationTimer.current = null;
          setHeartMove(false);
        }
      }, stepTime);
    }
  }
  // 组件销毁前关闭没有结束的定时器
  useEffect(() => {
    return () => {
      if (heartAnimationTimer.current !== null) {
        clearInterval(heartAnimationTimer);
        heartAnimationTimer.current = null;        
      }
    }
  }, [])
  return (
    <div className='login' onClick={createHeart} ref={pageRef}>
      <Background/>
      <div className="card" style={{
        opacity: cardOpacity
      }}>
        <Card/>
      </div>
      <div className="welcome">
        <WelcomeBoard 
          title={'Welcome to World of MMY & SYY!'}
          btnInfo={'Start Roaming!'}
        />
      </div>
      {existHeart ? <Heart ref={heartRef} size={heartSize} x={heartX} y={heartY} color={heartColor}/> : ''}
    </div>
  )
}