import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getState } from 'react';
// import { getLocation } from '../components/helperFunctions';

// Location

// let locData = null;
// const getLoc = () => {
// 	fetch('https://api.geoapify.com/v1/ipinfo?apiKey=8fdcc0c916b5469faed8e094ddea8730')
// 		.then(function(response) {
// 			return response.json();
// 		})
// 		.then(data => {
// 			locData = data;
// 			// console.log(locData);
// 			// setLoc(locData.location);
//             return locData;
// 		});
// }
// const setLoc = async () => {
//     const loc = await getLoc();
//     const lon = Number.parseFloat(loc.longitude).toFixed(2);
//     const lat = Number.parseFloat(loc.latitude).toFixed(2);
//     const coorData = `lon=${lon}&lat=${lat}`;
//     console.log(coorData)
//     // return coorData;
// }

// const LOCATION = [];

// const getLocation = async () => {
//     const response = await fetch('https://api.geoapify.com/v1/ipinfo?apiKey=8fdcc0c916b5469faed8e094ddea8730');
//     const data = await response.json();
//     LOCATION.push(data.location);
//     // LOCATION = {longitude: data.location.longitude, latitude: data.location.latitude};
    
// }

// const setLocation = () => {
//     getLocation();
    
//     const aTest = [...LOCATION];
//     console.log(aTest);
// }

// (async () => {
//     const location = await getLocation();
// })();


// export const getLocation = createAsyncThunk(
//     'weather/getLocation'
// )

// fetch('https://api.geoapify.com/v1/ipinfo?apiKey=8fdcc0c916b5469faed8e094ddea8730')
// .then(resp => resp.json())
// .then((userLocationData) => {
// 	console.log(userLocationData);
// });




// Weather

const tempWeather = {
    "count": 1,
    "data": [
      {
        "app_temp": 10,
        "aqi": 16,
        "city_name": "London",
        "clouds": 0,
        "country_code": "CA",
        "datetime": "2022-11-08:18",
        "dewpt": -0.1,
        "dhi": 93.81,
        "dni": 790.78,
        "elev_angle": 28.96,
        "ghi": 470.22,
        "gust": 3.8984375,
        "h_angle": 18,
        "lat": 42.98,
        "lon": -81.25,
        "ob_time": "2022-11-08 18:34",
        "pod": "d",
        "precip": 0,
        "pres": 1007,
        "rh": 51,
        "slp": 1037.0588,
        "snow": 0,
        "solar_rad": 470.2,
        "sources": [
          "rtma"
        ],
        "state_code": "08",
        "station": "AS442",
        "sunrise": "12:09",
        "sunset": "22:08",
        "temp": 10,
        "timezone": "America/Toronto",
        "ts": 1667932470,
        "uv": 3.1377,
        "vis": 16,
        "weather": {
          "icon": "c01d",
          "description": "Clear sky",
          "code": 800
        },
        "wind_cdir": "E",
        "wind_cdir_full": "east",
        "wind_dir": 81,
        "wind_spd": 3.105674
      }
    ]
  }

export const getLocation = createAsyncThunk(
    'weather/getLocation',
    async () => {
        const response = await fetch('https://api.geoapify.com/v1/ipinfo?apiKey=8fdcc0c916b5469faed8e094ddea8730');
        const data = await response.json();
        const lon = Number.parseFloat(data.location.longitude).toFixed(2);
        const lat = Number.parseFloat(data.location.latitude).toFixed(2);
        const location = [lon,lat]
        return location;
    }
)  

const weatherOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1e9389150amshc0525592df131dbp1ec6f3jsnc034e9e36680',
		'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
	}
};

export const loadWeather = createAsyncThunk(
    'weather/loadWeather',
    async (arg, { getState }) => {
        
        // const response = await fetch('https://weatherbit-v1-mashape.p.rapidapi.com/current?lon=-81.25&lat=42.98&units=metric&lang=en', weatherOptions)
        // const data = await response.json();
        console.log('testing')
        const testState = getState();
        console.log(testState);
        // const longLat = state.weather.location;
        // console.log(longLat)
        // conserve api use 
        const weather = tempWeather.data[0]
        return weather;
    }
)

const sliceOptions = {
    name: 'weather',
    initialState: {
        location: {},
        forecast: {},
        isLoading: false,
        hasError: false
    },
    reducers: {},
    extraReducers: {
        [getLocation.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [getLocation.fulfilled]: (state, action) => {
            state.location = {
                longitude: action.payload[0], 
                latitude: action.payload[1]
            };
            state.isLoading = false;
            state.hasError = false;
        },
        [getLocation.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        },
        [loadWeather.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [loadWeather.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.hasError = false;
            // state.content = action.payload;
            state.forecast = { 
                city: action.payload.city_name,
                temp: action.payload.temp.toString(),
                desc:action.payload.weather.description,
                icon:action.payload.weather.icon
            }
        },
        [loadWeather.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        }
    }
}

export const weatherSlice = createSlice(sliceOptions);
export const selectWeather = (state) => state.weather.forecast;
export const selectLocation = (state) => state.weather.location;
export default weatherSlice.reducer;