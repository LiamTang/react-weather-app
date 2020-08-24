import React from 'react';

import { Cloudy, Day, Rainy, Snowy, Thunder } from '../../Weather-Icons/Icon';
import './temperature.scss';

export default function Temperature(props) {
  const { temp, description, range } = props;
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
    <div className="temperature">
      {getWeatherIcon(Number(range))}
      <h3> {temp}&deg;</h3>
      <p>{description}</p>
    </div>
  );
}
