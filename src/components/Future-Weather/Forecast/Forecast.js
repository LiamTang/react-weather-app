import React from 'react';
import './forecast.scss';

import { Cloudy, Day, Rainy, Snowy, Thunder } from '../../Weather-Icons/Icon';

export default function Forecast(props) {
  const { data } = props;

  const weeks = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  let index = new Date(data.date * 1000).getDay();
  const getWeatherIcon = (range) => {
    switch (true) {
      case range >= 200 && range <= 232:
        return <Thunder />;
      case range >= 300 && range <= 531:
        return <Rainy />;
      case range >= 600 && range <= 622:
        return <Snowy />;
      case range === 800:
        return <Day />;
      default:
        return <Cloudy />;
    }
  };
  return (
    <div className="forecast">
      <h4> {weeks[index]}</h4>
      {getWeatherIcon(data.range)}
      <p> {data.temp}&deg;</p>
    </div>
  );
}
