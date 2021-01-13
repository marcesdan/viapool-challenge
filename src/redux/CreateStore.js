import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import Config from '../config/DebugConfig';
import '../config/ReactotronConfig';

// creates the store
export default (rootReducer, rootSaga) => {
  /* ------------- Redux Configuration ------------- */

  const middleware = [];
  const enhancers = [];

  /* ------------- Analytics Middleware ------------- */
  // middleware.push(ScreenTracking);

  /* ------------- Saga Middleware ------------- */

  const sagaMonitor = Config.useReactotron ? console.tron.createSagaMonitor() : null;
  const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
  middleware.push(sagaMiddleware);

  /* ------------- Assemble Middleware ------------- */

  enhancers.push(applyMiddleware(...middleware));

  // if Reactotron is enabled (default for process.env.NODE_ENV === 'development'),
  // we'll create the store through Reactotron
  const createAppropriateStore = createStore;
  if (Config.useReactotron) {
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
