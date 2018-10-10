import React, { Component } from 'react';
import { connect } from 'react-redux';

import { css } from 'aphrodite';
import { styles } from '../../styles/generic.js';

import Emoji from '../Emoji';
import Forecast from './Forecast';

import {
  fetchApiWeatherForecast,
  onChangeCity, } from '../../actions/weather';

/**
 * Shows the weather search form and handles weather search logic.
 **/

const mapStateToProps = state => {
  return {
    ...state.weather,
  }
};

// TODO: Validate form and run more syntax checks before fetchApiWeatherForecast can be called
const mapDispatchToProps = dispatch => ({
  fetchApiWeatherForecast: (city) => dispatch(fetchApiWeatherForecast(city)),
  onChangeCity: (city) => dispatch(onChangeCity(city)),
});

class Weather extends Component {
  constructor() {
    super();
    this.changeCity = ev => this.props.onChangeCity(ev.target.value);
    this.submitForm = (city) => ev => {
      ev.preventDefault();
      this.props.fetchApiWeatherForecast(city);
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
        <p className={css(styles.instructions)}>Enter the name of your city to get today's forecast.</p>
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