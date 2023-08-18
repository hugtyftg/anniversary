/* eslint-disable react/prop-types */
import React, { useRef } from 'react';
import './index.less';

export default function Glass(props) {
  const {children} = props;
  return (
    <div className="glass">
      {children}
    </div>
  )
}
