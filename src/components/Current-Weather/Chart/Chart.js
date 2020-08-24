import React from 'react';
import ECharts from 'echarts-for-react';
import './chart.scss';

export default function Chart(props) {
  const { hourlyForecast } = props;
  console.log(hourlyForecast);
  const hours = hourlyForecast.map((hour) => {
    return new Date(hour.hour * 1000).getHours();
  });
  const temps = hourlyForecast.map((temp) => temp.temp);

  let option = {
    title: {
      text: 'Hourly Forecast',
    },
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
      <ECharts option={option} style={{ height: '10rem' }} />
    </div>
  );
}
