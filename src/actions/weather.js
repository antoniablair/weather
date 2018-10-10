import fetch from 'cross-fetch';
import config from '../config';

export const weatherForecastRequest = (city) => dispatch => {
  dispatch({
    city: city,
    type: 'WEATHER_FORECAST_REQUEST',
    weatherForecastLoading: true,
  });
};

export const weatherForecastReceive = (data) => dispatch => {
  // TODO: Save forecast to local storage so that it can appear whenever user opens the page (if still right date)
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

export const fetchApiWeatherForecast = (city) => async (dispatch) => {
  dispatch(weatherForecastRequest(city));

  const weatherApiKey = config.weatherApiKey;

  let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}`);

  if (!response || (!response.ok)) {
    // TODO: Instead of throwing, dispatch an error to display to user, and clear input fields
    throw new Error('Whoops! Try typing in another city.');
  }

  if (response.ok) {
    let json = await response.json();
    dispatch(weatherForecastReceive(json));
    return json;
  }
  throw new Error(response.status)
};
