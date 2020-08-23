import React from 'react';
import './currentWeather.scss';

import Temperature from '../Current-Weather/Temperature/Temperature';
import Detail from '../Current-Weather/Detail/Detail';

export default function CurrentWeather() {
  return (
    <div className="current-Weather">
      <Temperature />
      <Detail />
    </div>
  );
}
