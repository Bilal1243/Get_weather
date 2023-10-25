import React from 'react'
import moment from 'moment';
import './Weather.css'
import { Button } from 'semantic-ui-react';

function Weather({ weatherData }) {

    const refresh = () => {
        window.location.reload()
    }

    return (
        <div className="container">
            <div className="main">

                <div class="top">
                    <div class="left">
                        <p class="header">{weatherData.name}</p>
                    </div>
                    <div class="right">
                        <p className='currentTime'>{moment().format('h:mm A')}</p>
                        <Button class="button" inverted color='blue' circular icon='refresh' onClick={refresh} />
                    </div>
                </div>

                <div className="flex">
                    <p className="day">{moment().format('dddd')}, <span>{moment().format('LL')}</span></p>
                    <p className="description">{weatherData.weather[0].main}</p>
                </div>

                <div className="flex">
                    <p className="temp">Temprature: {weatherData.main.temp} &deg;C</p>
                    <p className="temp">Humidity: {weatherData.main.humidity} %</p>
                </div>

                <div className="flex">
                    <p className="sunrise-sunset">Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
                    <p className="sunrise-sunset">Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
                </div>

            </div>
        </div>
    )
}

export default Weather
