import React from 'react'
import Slider from '@material-ui/core/Slider';
import { withStyles } from '@material-ui/core/styles';

const AudioSlider = withStyles({
  root: {
    color: '#C8DEF4',
    height: 8,
    scrollBehavior: 'smooth',
    opacity: 1
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    opacity: 1,
    backgroundColor: '#9AA9CC',
    height: 8,
    borderRadius: 4,
  },
})(Slider);

export default AudioSlider
