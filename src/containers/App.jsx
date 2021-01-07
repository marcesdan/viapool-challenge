import React from 'react';

import '../assets/sass/app.styles.scss';
import { Provider } from 'react-redux';
import createStore from '../redux';
import RootContainer from './RootContainer';

// create our store
const store = createStore();

const App = () => (
  <Provider store={store}>
    <RootContainer />
  </Provider>
);

// allow reactotron overlay for fast design in dev mode
export default App;
