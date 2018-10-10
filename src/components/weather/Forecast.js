import React from 'react';
import { forecast } from '../../styles/forecast.js';

import { joinArrayGrammatically, initialCasePhrase } from '../../utils/textParsing';
import {css} from 'aphrodite';

const parseForecastList = (data) => {
  const weatherData = data;
  let forecasts = [];

  weatherData.forEach(forecast => {
    forecasts.push(forecast['description']);
  });

  return forecasts;
};

const generateForecastPrediction = (data, locale) => {
  const forecasts = data;
  const city = locale;

  const forecastString = joinArrayGrammatically(forecasts);

  return `The forecast today for ${initialCasePhrase(city)} is: ${forecastString}.`;
};

const Forecast = (props) => {
  const weatherData = props.weatherData;
  const city = props.city;

  if (weatherData !== null) {

    const forecasts = parseForecastList(weatherData['weather']);
    const forecastPrediction = generateForecastPrediction(forecasts, city);

    return (
      <div className={css(forecast.text)}>
        <p>{forecastPrediction}</p>
      </div>
    );
  } else {
    return null;
  }
};

export default Forecast;
