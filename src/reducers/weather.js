const initialState = {
  city: 'Kansas City',
  errorMessage: null,
  weatherData: null,
  weatherForecastLoading: false,
};

export default(state = initialState, action) => {
  switch (action.type) {
    case 'WEATHER_FORECAST_REQUEST':
      return {
        ...state,
        weatherForecastLoading: action.weatherForecastLoading,
      };
    case 'WEATHER_FORECAST_RECEIVE':
      return {
      ...state,
      weatherData: action.weatherData,
      weatherForecastLoading: action.weatherForecastLoading,
    };
    case 'UPDATE_CITY':
      return {
      ...state,
      city: action.city,
    };
    default:
      return state
  }
};