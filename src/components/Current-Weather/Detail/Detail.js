import React from 'react';
import './detail.scss';

export default function Detail(props) {
  const { humidity, pressure, visibility } = props;
  return (
    <div className="detail">
      <h3>Today</h3>
      <div className="information">
        <div className="pressure">
          <h4> Pressure</h4>
          <p> {pressure}mb</p>
        </div>
        <div className="visibility">
          <h4> Visibility</h4>
          <p> {visibility} KM</p>
        </div>
        <div className="humidity">
          <h4> Humidity</h4>
          <p> {humidity}%</p>
        </div>
      </div>
    </div>
  );
}
