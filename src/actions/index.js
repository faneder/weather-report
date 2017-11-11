import axios from 'axios';

const API_KEY = 'cec5fe08c7d343d7b80d9d29aec1a090';
const API_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export const fetchWeather = (city) => {
	const COUNTRY_CODE = 'au';
	const URL = `${API_URL}&q=${city},${COUNTRY_CODE}`
	const REQUEST = axios.get(URL);

	return {
		type: FETCH_WEATHER,
		payload: REQUEST
	};
}
