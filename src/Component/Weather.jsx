import React, { useEffect, useState } from 'react'
import './Weather.css'
import search_icon from '../assets/search.png'
import clear_icon from '../assets/clear.png'
// import cloud_icon from '../assets/cloudsearch.png'
// import drizzle_icon from '../assets/drizzle.png'
import humidity_icon from '../assets/humidity.png'
// import rain_icon from '../assets/rain.png'
// import snow_icon from '../assets/snow.png'
import wind_icon from '../assets/wind.png'


function Weather() {
  const [weatherData,setWeatherData] =  useState(false);

  const search = async (city)=>{
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setWeatherData({
        humidity:data.main.humidity,
        windSpeed : data.wind.speed,
        temperature : Math.floor(data.main.temp),
        loaction : data.name,
        icon : h
      })

    } catch (error) {
      
    }
  }
  useEffect(()=>{
    search("Chennai");
  },[])
  return (
    <div className='weather'>
      <div className="search-bar">
        <input type="text"  placeholder='search'/>
        <img src={search_icon} alt="" />
      </div>

      <img src={clear_icon} className='weather-icon' alt="" />
      <p className='temperature'>16°C</p>
      <p className='location'>London</p>
      <div className="weather-data">
        <div className="col">
          <img src={humidity_icon} alt="" />
          <div>
            <p>91%</p>
            <span>Humidity</span>
          </div>
        </div>
        <div className="col">
          <img src={wind_icon} alt="" />
          <div>
            <p>3.6 Km/h</p>
            <span>Wind Speed</span>
          </div>
        </div>
       
      </div>
    </div>
  )
}

export default Weather
