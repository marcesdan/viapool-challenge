import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

// creates the store
export default (rootReducer, rootSaga) => {
  /* ------------- Redux Configuration ------------- */

  const middleware = [];
  const enhancers = [];

  /* ------------- Analytics Middleware ------------- */
  // middleware.push(ScreenTracking);

  /* ------------- Saga Middleware ------------- */

  // eslint-disable-next-line no-console
  const sagaMonitor = console.tron && console.tron.createSagaMonitor();
  const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
  middleware.push(sagaMiddleware);

  /* ------------- Assemble Middleware ------------- */

  enhancers.push(applyMiddleware(...middleware));

  // if Reactotron is enabled (default for process.env.NODE_ENV === 'development'),
  // we'll create the store through Reactotron
  const createAppropriateStore = createStore;
  // eslint-disable-next-line no-console
  if (console.tron) {
    // eslint-disable-next-line no-console
    enhancers.push(console.tron.createEnhancer());
  }
  const store = createAppropriateStore(rootReducer, compose(...enhancers));

  // kick off root saga
  const sagasManager = sagaMiddleware.run(rootSaga);
  return {
    store,
    sagasManager,
    sagaMiddleware,
  };
};
