import React from 'react';
import './currentTime.scss';

export default function CurrentTime() {
  const date = new Date().toLocaleTimeString();
  const hour = date.slice(0, 2) + date.slice(8, 11);
  const weeks = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const index = new Date().getDay();
  return (
    <div className="date">
      <h4>{weeks[index]}</h4>
      <h4>{hour}</h4>
    </div>
  );
}
