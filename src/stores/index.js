import { combineReducers } from 'redux';
import configureStore from 'stores/CreateStore';
import rootSaga from 'sagas';

const github = require('./GithubRedux').reducer;
const drivers = require('./DriversRedux').reducer;

/* ------------- Assemble The Reducers ------------- */
export const reducers = combineReducers({
  github,
  drivers,
});

export default () => {
  const { store, sagasManager, sagaMiddleware } = configureStore(reducers, rootSaga);
  if (module.hot) {
    module.hot.accept(() => {
      // eslint-disable-next-line global-require,import/no-self-import
      store.replaceReducer(require('.').reducers);
      sagasManager.cancel();
      sagasManager.done.then(() => {
        // eslint-disable-next-line global-require
        sagaMiddleware(require('sagas').default);
      });
    });
  }
  return store;
};
