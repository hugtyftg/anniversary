import React from 'react';
import './index.less';

export default function Glass(props) {
  const {children} = props;
  return (
    <div className="glass">
      {children}
    </div>
  )
}
