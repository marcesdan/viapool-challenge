import React from 'react';

import '../assets/sass/app.styles.scss';
import { Provider } from 'react-redux';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import createStore from '../redux';
import RootContainer from './RootContainer';

// create our store
const store = createStore();
const theme = createMuiTheme({
  palette: {
    primary: '#e89eef',
    secondary: '#336b87',
  },
});

const App = () => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <RootContainer />
    </MuiThemeProvider>
  </Provider>
);

// allow reactotron overlay for fast design in dev mode
export default App;
