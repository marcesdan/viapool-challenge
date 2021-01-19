import React, {
  memo, useEffect, Suspense, lazy,
} from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as Sentry from '@sentry/react';
import StartupRedux from '../redux/StartupRedux';
import withRoot from '../layout/withRoot';
import DriversRedux from '../redux/DriversRedux';
import ErrorMessage from '../components/ErrorMessage';

const DriverSubmit = lazy(() => import(/* webpackChunkName: "driver-submit" */ './DriverSubmit'));

const RootContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(StartupRedux.startup());
    dispatch(DriversRedux.enabledDomainsRequest());
  }, []);
  return (
    <Sentry.ErrorBoundary fallback={ErrorMessage}>
      <Suspense fallback={<div />}>
        <Switch>
          <Route exact path="/" component={DriverSubmit} />
        </Switch>
      </Suspense>
    </Sentry.ErrorBoundary>
  );
};

export default memo(withRoot(RootContainer));
