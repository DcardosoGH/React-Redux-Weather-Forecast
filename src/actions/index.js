import axios from 'axios';

const API_KEY = '03a702bf97c6bc3bdc8015e174ce7f8c';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    console.log('Request', request);
    
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}