import React from 'react';
import './App.scss';
import City from './components/City/City';
import CurrentTime from './components/Current-Time/CurrentTime';
import CurrentWeather from './components/Current-Weather/CurrentWeather';
import FutureWeather from './components/Future-Weather/FutureWeather';

const WEATHER_API = process.env.REACT_APP_WEATHER_API_KEY;
const GOO_API = process.env.REACT_APP_GOOGLE_API_KEY;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      address: '',
      latitude: '',
      longitude: '',
      currentWeather: [],
      futureWeather: [],
    };
  }
  fetchWeather = async (latitude, longitude) => {
    const api = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely&appid=${WEATHER_API}`;
    const result = await (await fetch(api)).json();
    this.getCurrentWeather(result);
    this.getFutureWeather(result);
  };

  fetchGeoData = async (city) => {
    const newApi = `https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${GOO_API}`;
    const response = await (await fetch(newApi)).json();

    const address = response.results[0].formatted_address;
    const latitude = response.results[0].geometry.location.lat;
    const longitude = response.results[0].geometry.location.lng;

    this.setState({
      address: address,
      latitude: latitude,
      longitude: longitude,
    });

    this.fetchWeather(latitude, longitude);
  };

  getFutureWeather = (result) => {
    const futureWeather = [];
    if (result !== undefined) {
      for (let i = 1; i <= 7; i++) {
        futureWeather.push({
          date: result.daily[i].dt,
          range: result.daily[i].weather[0].id,
          temp: Math.floor(result.daily[i].temp.day - 273.15),
        });
      }

      this.setState({
        futureWeather: futureWeather,
      });
    }
  };

  getCurrentWeather = (result) => {
    const currentWeather = [];
    console.log(result);
    if (result !== undefined) {
      currentWeather.push({
        temp: Math.floor(result.current.temp - 273.15),
        humidity: result.current.humidity,
        pressure: result.current.pressure,
        visibility: result.current.visibility / 1000,
        description: result.current.weather[0].description,
        range: result.current.weather[0].id,
      });
      this.setState({
        currentWeather: currentWeather,
      });
    }
  };

  componentDidMount() {
    this.fetchGeoData('sydney');
  }
  render() {
    const { address, currentWeather, futureWeather, time } = this.state;

    return (
      <div className="App">
        <div className="wrap">
          <div className="container">
            <City address={address} />
            <CurrentTime />
            <CurrentWeather currentWeather={currentWeather} />
            <FutureWeather futureWeather={futureWeather} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
