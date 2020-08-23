import React from 'react';
import './App.scss';
import City from './components/City/City';
import Date from './components/Date/Date';
import CurrentWeather from './components/Current-Weather/CurrentWeather';
import FutureWeather from './components/Future-Weather/FutureWeather';

function App() {
  return (
    <div className="App">
      <div className="wrap">
        <div className="container">
          <City />
          <Date />
          <CurrentWeather />
          <FutureWeather />
        </div>
      </div>
    </div>
  );
}

export default App;
