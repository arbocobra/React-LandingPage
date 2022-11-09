import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { tempWeather } from '../components/helperFunctions';

const weatherOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1e9389150amshc0525592df131dbp1ec6f3jsnc034e9e36680',
		'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
	}
};

const getLocation = async () => {
    try {
        const locationResponse = await fetch('https://api.geoapify.com/v1/ipinfo?apiKey=8fdcc0c916b5469faed8e094ddea8730');
        const locationData = await locationResponse.json();
        return await locationData.location;
    } catch (e) {
        console.error(e)
    }
}

const getWeather = async (coord) => {
    const weatherUrl = `https://weatherbit-v1-mashape.p.rapidapi.com/current?${coord}&units=metric&lang=en`;
    try {
        const weatherResponse = await fetch(weatherUrl, weatherOptions)
        const weatherData = await weatherResponse.json();
        return await weatherData.data[0];
    } catch (e) {
        console.error(e)
    }
}

export const loadWeather = createAsyncThunk(
    'weather/getWeather',
    async () => {
        const data = {};
        let location;
        let weather;
        try {
            location = await getLocation();
            data.location = location;
            console.log(location)
            console.log(data)
        } catch {
            console.log('Could not fetch location')
        } finally {
            const long = Number.parseFloat(data.location.longitude).toFixed(2);
            const lat = Number.parseFloat(data.location.latitude).toFixed(2);
            const coordUrl = `lon=${long}&lat=${lat}`
            try {
                // Save API data with tempWeather
                weather = await getWeather(coordUrl);
                // console.log(weather)
                // weather = tempWeather.data[0];

                data.forecast = {
                    city: weather.city_name,
                    temp: weather.app_temp.toFixed(0),
                    desc: weather.weather.description,
                    icon: weather.weather.icon
                };
                // console.log(weather)
                // console.log(data)
            } catch {
                console.log('Could not fetch weather')
            }
            return data;
        }
    }
)

const sliceOptions = {
    name: 'weather',
    initialState: {
        location: {},
        forecast: {},
        isLoading: false,
        hasError: false,
    },
    reducers: {},
    extraReducers: {
        [loadWeather.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [loadWeather.fulfilled]: (state, action) => {
            state.location = action.payload.location;
            state.forecast = action.payload.forecast;
            state.isLoading = false;
            state.hasError = false;
        },
        [loadWeather.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        },
    }
}

export const weatherSlice = createSlice(sliceOptions);
export const selectWeather = (state) => state.weather.forecast;
export const selectLocation = (state) => state.weather.location;
export default weatherSlice.reducer;