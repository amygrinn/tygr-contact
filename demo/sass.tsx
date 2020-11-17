import React from 'react';
import ReactDOM from 'react-dom';
import { Email, Github, Twitter } from '..';
import './styles/main.scss';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column' as const,
  alignItems: 'center',
};

ReactDOM.render(
  <div style={containerStyle}>
    <Github />
    <Twitter />
    <Email />
  </div>,
  document.getElementById('app')
);
