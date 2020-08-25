import React from 'react';
import ECharts from 'echarts-for-react';
import './chart.scss';

export default function Chart(props) {
  const { hourlyForecast } = props;
  const hours = hourlyForecast.map((hour) => {
    return new Date(hour.hour * 1000).getHours();
  });
  const temps = hourlyForecast.map((temp) => temp.temp);

  let option = {
    xAxis: {
      type: 'category',
      data: hours,
    },
    yAxis: {},
    series: [
      {
        data: temps,
        type: 'line',
        smooth: true,
      },
    ],
  };
  return (
    <div className="chart">
      <h3>Hourly Forecast</h3>
      <ECharts option={option} style={{ height: '10rem' }} />
    </div>
  );
}
