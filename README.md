# Weather API App

This is a simple web application that fetches the weather forecast from a city.

<img src="https://github.com/antoniablair/weather/blob/master/screenshot.jpg" width="500">

The project was boostrapped with `create-react-app` and then built out using React, Redux, React Router, 
Thunk, and Aphrodite for styling. 

### Dev Todo's
- Limit number of API calls that can be made at once
- Form validation on the city submission form
- Javascript type checking (Flow)
- Unit tests to test for basic logic, such as parsing forecasts
- Error handling / display message to the user if the API is not successful
- If you look at a city's forecast and then begin typing in a different city, erase the forecast message
- Create some reusable style components that could be used for an About page, etc
- Save forecast in localStorage until it is no longer up-to-date
- Improve SEO
- Improve the UI

### Potential Upcoming Features
- Login option to save your city
- Display a GIF that's queried based on the forecasts
- Display humidity, temperature, etc.
