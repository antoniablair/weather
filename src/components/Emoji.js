import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  emoji: {
    paddingLeft: '5px',
    marginRight: '5px',
  }
});

const Emoji = (props) => (
  <span
    role='img'
    aria-label={props.label ? props.label : ''}
    aria-hidden={props.label ? 'false' : 'true'}
    className={css(styles.emoji)}
  >
    {props.symbol}
  </span>
);

export default Emoji;