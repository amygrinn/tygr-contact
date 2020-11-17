import React from 'react';
import ReactDOM from 'react-dom';
import { Email, Github, Twitter } from '..';
import '../lib/tygr-contact.min.css';

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
