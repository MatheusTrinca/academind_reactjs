import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = ({ dataPoints }) => {
  const values = dataPoints.map(dataPoint => dataPoint.value);
  const totalMaximum = Math.max(...values);
  return (
    <div className="chart">
      {dataPoints.map(dataPoint => (
        <ChartBar
          key={dataPoint.label}
          label={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
        />
      ))}
    </div>
  );
};

export default Chart;
