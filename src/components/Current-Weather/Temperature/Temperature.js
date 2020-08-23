import React from 'react';

import { Cloudy, Day, Rainy, Snowy, Thunder } from '../../Weather-Icons/Icon';
import './temperature.scss';

export default function Temperature() {
  return (
    <div className="temperature">
      <Cloudy />
      <h3> 18&deg;</h3>
      <p>Partly Cloudy</p>
    </div>
  );
}
