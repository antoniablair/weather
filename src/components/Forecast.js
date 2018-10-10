import React from 'react';

const parseForecastList = (data) => {
  const weatherData = data;
  let forecasts = [];

  weatherData.forEach(forecast => {
    forecasts.push(forecast['description']);
  });

  return forecasts;
};

const joinArray = (arr) => {
  let outStr = '';
    if (arr.length === 1) {
        outStr = arr[0];
    } else if (arr.length === 2) {
        outStr = arr.join(' and ');
    } else if (arr.length > 2) {
        outStr = arr.slice(0, -1).join(', ') + ', and ' + arr.slice(-1);
    }
    return outStr;
};

const capitalizeWord = (word) => {
  let lower = word.toLowerCase();

  return lower.charAt(0).toUpperCase() + lower.substr(1);
};

const initialCase = (city) => {
  let words = [];

  let substrings = city.split(' ');

  substrings.forEach(s => words.push(capitalizeWord(s)));

  return words.join(' ');
};

const generateForecastPrediction = (data, city) => {
  const forecasts = data;
  const forecastString = joinArray(forecasts);

  const prediction = `The forecast today for ${initialCase(city)} is: ${forecastString}.`;
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
