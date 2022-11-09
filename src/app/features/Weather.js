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
            <div className="inner-weather">
                <p>{weather.city}</p>
                <h2>{weather.temp}</h2>
            </div>
            <div className="inner-weather">
                <p>{weather.desc}</p>
                <div className="image-container"><img src={weatherIcon} /></div>
            </div>
        </div>
    )
}