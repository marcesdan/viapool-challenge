import React from 'react';

import '../styles/sass/app.styles.scss';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import createStore from '../redux';
import RootContainer from './RootContainer';

// create our store
const store = createStore();

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <RootContainer />
    </BrowserRouter>
  </Provider>
);

// allow reactotron overlay for fast design in dev mode
export default App;
