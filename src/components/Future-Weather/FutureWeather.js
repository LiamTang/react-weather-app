import React from 'react';

import './futureWeather.scss';
import Forecast from './Forecast/Forecast';

export default function FutureWeather(props) {
  const { futureWeather } = props;

  return (
    <div className="futureWeather">
      {futureWeather.map((data, index) => {
        return <Forecast data={data} key={index} />;
      })}
    </div>
  );
}
