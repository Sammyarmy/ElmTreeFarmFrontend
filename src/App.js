import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [weatherForecast, setWeatherForecast] = useState(null);

  useEffect(() => {
    async function fetchWeatherForecast() {
      const response = await fetch('https://localhost:44315/weatherforecast');
      const data = await response.json();
      setWeatherForecast(data);
    }

    let ignore = fetchWeatherForecast()
  }, []);

  return (
      <div className="App">
        {weatherForecast ?(
        <header className="weather-forecast-container">
          {
              <div className="weather-forecast" key={weatherForecast.location.name}>
                <p className="name"> Location: {weatherForecast.location.name} </p>
                <p className="date"> Date: {weatherForecast.location.localtime} </p>
                <p className="temp"> Temp: {weatherForecast.current.temp_c}</p>
                <img src={weatherForecast.current.condition.icon} className="logo" alt="weather" />
              </div>
          }
        </header>
            ) : (
            <p>Loading weather forecast...</p>
        )}
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> hi beb2
          </p>
          <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
  );
}

export default App;