import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/react';
import App from './containers/App';
import './assets/sass/index.scss';
import debugConfig from './config/DebugConfig';

Sentry.init({ dsn: process.env.SENTRY_DSN });

(async () => {
  await debugConfig();
  ReactDOM.render(<App />, document.getElementById('root'));
})();
