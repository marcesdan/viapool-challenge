import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './assets/sass/index.scss';
import DebugConfig from './config/DebugConfig';

if (DebugConfig.useMirage) {
  (async () => {
    await import('./config/MirageConfig');
  })();
}

ReactDOM.render(<App />, document.getElementById('root'));
