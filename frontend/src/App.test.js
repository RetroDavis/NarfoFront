import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


const sum = require('./sum');
it('It checks username value', () => {
  expect(sum(1, 2)).toBe(3);
});

