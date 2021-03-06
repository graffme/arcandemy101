import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles.js';

const Button = ({ disabled, onPress, style, theme, text }) => (
  <TouchableOpacity style={[styles.basic, styles[theme], disabled ? styles.disabled : "", style]} onPress={onPress} disabled={disabled} activeOpacity={0.6}>
    <Text style={[styles.basicText, styles[theme + "Text"]]}>{text}</Text>
  </TouchableOpacity>
);

Button.propTypes = {
  disabled: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string,
  theme: PropTypes.oneOf(['default', 'facebook']),
  style: PropTypes.object,
}

Button.defaultProps = {
  disabled: false,
  text: "Click me",
  theme: "default",
  style: {},
}

export default Button;
