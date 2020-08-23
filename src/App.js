import React from 'react';
import './App.scss';
import City from './components/City/City';
import Date from './components/Date/Date';
import CurrentWeather from './components/Current-Weather/CurrentWeather';
import FutureWeather from './components/Future-Weather/FutureWeather';

const API_KEY = 'bd4c1a8f97325ab7d72687fa20fdee7d';
const GOOGLE_API_KEY = 'AIzaSyAU1xfRJgQzt5zPGKOzWD2T_Y1M8AMUf_I';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      latitude: '',
      longitude: '',
    };
  }
  fetchWeather = async (latitude, longitude) => {
    const api = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely&appid=${API_KEY}`;
    const response = await (await fetch(api)).json();
    console.log(response);
  };

  fetchGeoData = async (city) => {
    const newApi = `https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${GOOGLE_API_KEY}`;
    const response = await (await fetch(newApi)).json();

    let address = response.results[0].formatted_address;
    let latitude = response.results[0].geometry.location.lat;
    let longitude = response.results[0].geometry.location.lng;

    this.setState({
      address: address,
      latitude: latitude,
      longitude: longitude,
    });

    this.fetchWeather(latitude, longitude);
  };

  componentDidMount() {
    // this.fetchCurrentWeather('sydney');
    this.fetchGeoData('sydney');
  }
  render() {
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
}

export default App;
