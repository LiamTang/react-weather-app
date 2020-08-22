import React from 'react';
import './App.scss';
import City from './components/City/City';
import Date from './components/Date/Date';

function App() {
  return (
    <div className="App">
      <div className="container">
        <City />
        <Date />
      </div>
    </div>
  );
}

export default App;
