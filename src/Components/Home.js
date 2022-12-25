import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import house from "../ChristmasElmTreeFarm.jpg";
import NavBar from "./NavBar";

const Home = () => {
    
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
        <div className="weather">
            <NavBar></NavBar>
            {weatherForecast ? (
                <header className="weather-forecast-container">
                    {
                        <div className="weather-forecast" key={weatherForecast.location.name}>
                            <p className="name"> Location: {weatherForecast.location.name} </p>
                            <p className="date"> Date: {weatherForecast.location.localtime} </p>
                            <p className="temp"> Temp: {weatherForecast.current.temp_c}</p>
                            <img src={weatherForecast.current.condition.icon} className="logo" alt="weather"/>
                        </div>
                    }
                </header>
            ) : (
                <p>Loading weather forecast...</p>
            )}
            <header className="house-photo">
                <img style={{width: 1200, height: 900}} src={house} className="HousePhoto" alt="HousePhoto"/>
                <p> Christmas at Elm tree farm</p>
            </header>
        </div>)
}

export default Home;