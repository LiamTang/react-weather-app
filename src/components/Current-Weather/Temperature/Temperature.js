import React from 'react';

import { Cloudy, Day, Rainy, Snowy, Thunder } from '../../Weather-Icons/Icon';
import './temperature.scss';

export default function Temperature(props) {
  const { temp, description, range } = props;
  const getWeatherIcon = (range) => {
    switch (true) {
      case range >= 200 && range <= 232:
        return (
          <div className="image">
            <Thunder />
          </div>
        );
      case range >= 300 && range <= 531:
        return (
          <div className="image">
            <Rainy />
          </div>
        );
      case range >= 600 && range <= 622:
        return (
          <div className="image">
            <Snowy />
          </div>
        );
      case range === 800:
        return (
          <div className="image">
            <Day />
          </div>
        );
      default:
        return (
          <div className="image">
            <Cloudy />
          </div>
        );
    }
  };
  return (
    <div className="temperature">
      {getWeatherIcon(Number(range))}
      <div className="temperature-detail">
        <h3> {temp}&deg;</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
