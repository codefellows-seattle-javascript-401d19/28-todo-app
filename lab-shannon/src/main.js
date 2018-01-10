import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

const content = document.createElement('div');
document.body.appendChild(content);

ReactDOM.render(<App />, content);
