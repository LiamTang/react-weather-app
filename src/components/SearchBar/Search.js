import React, { useState } from 'react';
import './search.scss';

export default function Search(props) {
  const [text, setText] = useState('');

  const handleTextChange = (e) => {
    const city = e.target.value;
    setText(city);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.fetchGeoData(text);
  };
  return (
    <div className="input">
      <input
        className="textSection"
        type="text"
        onChange={handleTextChange}
        placeholder="Please Enter A City"
      />
      <input
        className="button"
        type="button"
        value="Go"
        onClick={handleSubmit}
      />
    </div>
  );
}
