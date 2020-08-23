import React from 'react';
import './forecast.scss';

import { Cloudy, Day, Rainy, Snowy, Thunder } from '../../Weather-Icons/Icon';

export default function Forecast() {
  return (
    <div className="forecast">
      <h4> Mon</h4>
      <Day />
      <p> 21&deg;</p>
    </div>
  );
}
