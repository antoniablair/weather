import fetch from 'cross-fetch';
import config from '../config';
import json from '../fauxForecast.js';

export const fetchWeatherForecast = (city) => dispatch => {
  dispatch({
    city: city,
    type: 'WEATHER_FORECAST_REQUEST',
    weatherForecastLoading: true,
  });
};

export const receiveWeatherForecast = (data) => dispatch => {
  // TODO: Save to local storage
  dispatch({
    weatherData: data,
    type: 'WEATHER_FORECAST_RECEIVE',
    weatherForecastLoading: false,
  })
};

export const onChangeCity = (city) => dispatch => {
  dispatch({
    city,
    type: 'UPDATE_CITY',
  })
};


export function fetchWeatherForecastApi(city) {
  console.log(city);
  return function (dispatch) {
    dispatch(fetchWeatherForecast(city));

    const weatherApiKey = config.weatherApiKey;

    // TODO: Delete his
    console.log(json);
    dispatch(receiveWeatherForecast(json));

    // return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}`)
    //   .then(
    //       // todo: Check for 200 or 404
    //     response => response.json(),
    //     error => console.log('An error occurred.', error)
    //   ).then(json => { dispatch(receiveWeatherForecast(json)) });
  }
};