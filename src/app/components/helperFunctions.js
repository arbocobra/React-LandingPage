export const getArt = async (id) => {
    const metUrl = 'https://collectionapi.metmuseum.org/public/collection/v1/objects';
    // const idNum = id;
    const endpoint = `${metUrl}/${id}`;
    try {
        const response = await fetch(endpoint, { cache: 'no-cache' });
        if (response.ok) {
            const jsonResponse = await response.json();
            renderResponse(jsonResponse);
        }
    } catch (error) {
        console.log(error);
    }
};

const renderResponse = (val) => {
    console.log(val)
    const background = document.getElementById('background');
    let imgDimensions;
    if (val.measurements.length > 1) {
        const imgFilter = val.measurements.filter(
            (el) => el.elementName === 'Overall'
        );
        imgDimensions = imgFilter[0];
    } else {
        imgDimensions = val.measurements[0];
    }
    if (
        imgDimensions.elementMeasurements.Height >
            imgDimensions.elementMeasurements.width ||
        !imgDimensions.elementMeasurements.width
    ) {
        background.classList.toggle('tall');
    } else {
        background.classList.toggle('wide');
    }
    background.style.backgroundImage = `url(${val.primaryImage})`;
};

export const tempWeather = {
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