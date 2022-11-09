import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadWeather, selectWeather } from './weatherSlice';
// import { getLocation } from '../components/helperFunctions';

export const Weather = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadWeather())
    }, [dispatch])

    const weather = useSelector(selectWeather);
    const weatherIcon = `https://www.weatherbit.io/static/img/icons/${weather.icon}.png`

    return (
        <div className='weather-container inner-app'>
            <div className="feature-inner">
                <div className="inner-weather">
                    <p>{weather.city}</p>
                    <p>{weather.desc}</p>
                </div>
                <div className="inner-weather">
                    <h2>{weather.temp}&deg;C</h2>
                    <div className="image-container"><img src={weatherIcon} width='50' height='50' /></div> 
                </div>
            </div>
        </div>
    )
}