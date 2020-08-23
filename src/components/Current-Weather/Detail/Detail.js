import React from 'react';
import './detail.scss';

export default function Detail() {
  return (
    <div className="detail">
      <h3>Today</h3>
      <div className="information">
        <div className="pressure">
          <h4> Pressure</h4>
          <p> 810mb</p>
        </div>
        <div className="visibility">
          <h4> Visibility</h4>
          <p> 5 KM</p>
        </div>
        <div className="humidity">
          <h4> Humidity</h4>
          <p> 94%</p>
        </div>
      </div>
    </div>
  );
}
