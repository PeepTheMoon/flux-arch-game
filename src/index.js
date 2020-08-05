import React from 'react';
import { render } from 'react-dom';
import App from './components/App/App';
import Provider from './providers/Provider';

render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
);
