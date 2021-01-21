import React from 'react';
import ReactDOM from 'react-dom';
import App from 'containers/App';
import 'styles/sass/index.scss';
import debugConfig from 'config/DebugConfig';

(async () => {
  await debugConfig();
  ReactDOM.render(<App />, document.getElementById('root'));
})();
