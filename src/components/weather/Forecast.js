import React from 'react';

import { joinArrayGrammatically, initialCasePhrase } from '../../utils/textParsing';

const parseForecastList = (data) => {
  const weatherData = data;
  let forecasts = [];

  weatherData.forEach(forecast => {
    forecasts.push(forecast['description']);
  });

  return forecasts;
};

const generateForecastPrediction = (data, city) => {
  const forecasts = data;
  const forecastString = joinArrayGrammatically(forecasts);

  const prediction = `The forecast today for ${initialCasePhrase(city)} is: ${forecastString}.`;
  return prediction;
};

const Forecast = (props) => {
  const weatherData = props.weatherData;
  const city = props.city;

  if (weatherData !== null) {

    const forecasts = parseForecastList(weatherData['weather']);
    const forecastPrediction = generateForecastPrediction(forecasts, city);

    return (
      <div>
        <p>{forecastPrediction}</p>
      </div>
    );
  } else {
    return null;
  }
};

export default Forecast;
