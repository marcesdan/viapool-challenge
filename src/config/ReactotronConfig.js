import Immutable from 'seamless-immutable';
// eslint-disable-next-line import/no-extraneous-dependencies
import sagaPlugin from 'reactotron-redux-saga';
// eslint-disable-next-line import/no-extraneous-dependencies
import { reactotronRedux } from 'reactotron-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import Reactotron from 'reactotron-react-js';

const tron = Reactotron.configure({
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
