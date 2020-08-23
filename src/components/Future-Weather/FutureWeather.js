import React from 'react';

import './futureWeather.scss';
import Forecast from './Forecast/Forecast';

export default function FutureWeather() {
  return (
    <div className="futureWeather">
      <Forecast />
      <Forecast />
      <Forecast />
      <Forecast />
      <Forecast />
      <Forecast />
      <Forecast />
    </div>
  );
}
