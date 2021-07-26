import React from 'react';
import './ChartBar.css';

const ChartBar = ({ label, maxValue, value }) => {
  let barFillHeight = '0%';
  if (maxValue) {
    barFillHeight = Math.round((value / maxValue) * 100) + '%';
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="cart-bar__fill"
          style={{ height: barFillHeight, backgroundColor: '#510674' }}
        ></div>
      </div>
      <div className="cart-bar__label">{label}</div>
    </div>
  );
};

export default ChartBar;
