import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

import { makeStore } from './app/store';
import { Provider } from 'react-redux';
import RoutesSwitcher from './routes/routes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={makeStore()}>
      <RoutesSwitcher></RoutesSwitcher>
    </Provider>
  </React.StrictMode>
);
