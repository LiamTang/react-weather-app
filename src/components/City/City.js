import React from 'react';
import './city.scss';

export default function City(props) {
  const { address } = props;
  return (
    <div className="country">
      <h3>{address}</h3>
    </div>
  );
}
