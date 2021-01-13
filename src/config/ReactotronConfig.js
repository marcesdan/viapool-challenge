import Immutable from 'seamless-immutable';
import Config from './DebugConfig';

if (Config.useReactotron) {
  // eslint-disable-next-line import/no-extraneous-dependencies,global-require
  const sagaPlugin = require('reactotron-redux-saga/dist');
  // eslint-disable-next-line import/no-extraneous-dependencies,global-require,import/no-unresolved
  const { reactotronRedux } = require('reactotron-redux');
  // eslint-disable-next-line import/no-extraneous-dependencies,global-require,import/no-unresolved
  const tron = require('reactotron-react-js').default.configure({
    name: 'Drivers App',
    host: 'localhost',
    port: 9090,
  })
    .use(reactotronRedux({ onRestore: Immutable }))
    .use(sagaPlugin());
  // https://github.com/infinitered/reactotron for more options!
  tron.connect();
  // Let's clear Reactotron on every time we load the app
  tron.clear();
  // Totally hacky, but this allows you to not both importing reactotron-react-js
  // on every file.  This is just DEV mode, so no big deal.
  // eslint-disable-next-line no-console
  console.tron = tron;
}
