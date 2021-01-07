import Immutable from 'seamless-immutable';
// eslint-disable-next-line import/no-extraneous-dependencies
import Reactotron from 'reactotron-react-js';
// eslint-disable-next-line import/no-extraneous-dependencies
import { reactotronRedux as reduxPlugin } from 'reactotron-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import sagaPlugin from 'reactotron-redux-saga';
import Config from './DebugConfig';

const reactotron = Reactotron.configure({
  name: 'Drivers App',
  host: 'localhost',
  port: 9090,
})
  .use(reduxPlugin({ onRestore: Immutable }))
  .use(sagaPlugin());

if (Config.useReactotron) {
  // https://github.com/infinitered/reactotron for more options!
  reactotron.connect();
  // Let's clear Reactotron on every time we load the app
  reactotron.clear();
  // Totally hacky, but this allows you to not both importing reactotron-react-js
  // on every file.  This is just DEV mode, so no big deal.
  // eslint-disable-next-line no-console
  console.tron = reactotron;
}
export default reactotron;
