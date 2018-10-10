# Weather API App

This is a simple web application that fetches the weather forecast from a city.

The project was created using React, Redux, React Router, and Thunk. While right now it is set up 
as only one page, one could easily add more routes if necessary.

This is in the beginning phases of a project, so I would still need to add several items to make
it a more full-fledged website.

However, I hope it gives a sense of how I might bootstrap and organize a project.


### Dev Todo's
- Form validation on the city submission form
- Javascript type checking (Flow)
- Unit tests to test for basic logic, such as parsing forecasts
- Error handling / display message to the user if the API is not successful
- If you look at a city's forecast and then begin typing in a different city, erase the forecast message
- Create some reusable style components that could be used for an About page, etc
- Save forecast in localStorage until it is no longer up-to-date

### Potential Features
- Login option to save your city
- Display a GIF that's queried based on the forecasts
- Display humidity, temperature, etc. 