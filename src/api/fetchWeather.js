import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const URL = 'https://api.weatherapi.com/v1/current.json?';
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const fetchWeather = async(query) => {
    const { data } = await axios.get(URL, {
        params: {
            key: API_KEY,
            q: query,
        }
    });
    return data;
}