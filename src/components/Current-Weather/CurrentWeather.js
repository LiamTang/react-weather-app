import React from 'react';
import './currentWeather.scss';

import Temperature from '../Current-Weather/Temperature/Temperature';
import Detail from '../Current-Weather/Detail/Detail';

export default function CurrentWeather(props) {
  const { currentWeather } = props;
  const temp = currentWeather.map((temp) => temp.temp);
  const description = currentWeather.map((des) => des.description);
  const pressure = currentWeather.map((pre) => pre.pressure);
  const visibility = currentWeather.map((vis) => vis.visibility);
  const humidity = currentWeather.map((hum) => hum.humidity);
  const range = currentWeather.map((ran) => ran.range);

  return (
    <div className="current-Weather">
      <Temperature temp={temp} description={description} range={range} />
      <Detail pressure={pressure} visibility={visibility} humidity={humidity} />
    </div>
  );
}
