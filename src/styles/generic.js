import { StyleSheet } from 'aphrodite';

import colors from './colors';

export const styles = StyleSheet.create({
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

  instructions: {
    fontSize: '18px',
  },

  forecast: {
    fontSize: '24px',
    marginTop: '20px',
  }
});