import React, { Component } from 'react';
import { connect } from 'react-redux';
import colors from '../../constants/colors';
import { StyleSheet, css } from 'aphrodite';

import Emoji from '../Emoji';
import Forecast from './Forecast';

import {
  fetchWeatherForecastApi,
  onChangeCity,
  receiveWeatherForecast,} from '../../actions/weather';

const mapStateToProps = state => {
  return {
    ...state.weather,
  }
};

const mapDispatchToProps = dispatch => ({
  fetchWeatherForecastApi: (city) => dispatch(fetchWeatherForecastApi(city)),
  onChangeCity: (city) => dispatch(onChangeCity(city)),
});


const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.paper,
    textAlign: 'center',
    fontFamily: 'Source Sans Pro',
    padding: '10px 10px',
  },

  margin15: {
    margin: '15px 15px',
  },

  button: {
    backgroundColor: colors.gold,
    width: 200,
    height: 45,
    border: '0px solid',
    fontSize: '14px',
    marginLeft: '-1px',
    '@media (min-width: 992px)': {
        width: 300,
    }
  },

  input: {
    fontSize: '14px',
    height: 46,
    border: '0px solid',
    padding: '0px 0px 0px 10px',
    outline: 'none',
    ':focus': {
      outline: 'none',
    }
  },

  largeFont: {
    fontSize: '38px',
  },

  inlineBlock: {
    display: 'inline-block',
  },

  hover: {
    ':hover': {
        backgroundColor: colors.brightCoral,
        cursor: 'pointer',
    }
  },
});

class Weather extends Component {
  constructor() {
    super();
    this.changeCity = ev => this.props.onChangeCity(ev.target.value);
    this.submitForm = (city) => ev => {
      ev.preventDefault();
      this.props.fetchWeatherForecastApi(city);
    };
  }

  render() {
    return (
      <div className={css(styles.card)}>
        <header className={css([styles.largeFont, styles.inlineBlock])}>
        <div>
          <Emoji label='umbrella' symbol='☔' />
          <h1 className={css([styles.largeFont, styles.inlineBlock])}>
           Weather Report
          </h1>
          <Emoji label='peace' symbol='✌️' />
        </div>

        </header>
        <p>Enter the name of your city to get today's forecast.</p>
          <form onSubmit={this.submitForm(this.props.city)}>
            <div className={css(styles.margin15)}>
              <input type='city'
                     placeholder='Kansas City'
                     value={this.props.city}
                     onChange={this.changeCity}
                     className={css(styles.input)}
              />
              <button type='submit' className={css([styles.button, styles.hover])}>
                Search
              </button>
            </div>
          </form>
          <Forecast weatherData={this.props.weatherData} city={this.props.city}/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather);