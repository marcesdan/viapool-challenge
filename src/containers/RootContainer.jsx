import React, { lazy, memo, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as Sentry from '@sentry/react';
import StartupRedux from 'stores/StartupRedux';
import withRoot from 'layout/withRoot';
import DriversRedux from 'stores/DriversRedux';
import ErrorMessage from 'components/ErrorMessage';

const DriverSubmit = lazy(() => import(/* webpackChunkName: "driver-submit" */ './DriverSubmit'));

const RootContainer = () => {
  const dispatch = useDispatch();
  dispatch(StartupRedux.startup());
  dispatch(DriversRedux.enabledDomainsRequest());
  return (
    <Sentry.ErrorBoundary fallback={ErrorMessage}>
      <Suspense fallback={<div />}>
        <Switch>
          <Route exact path="/" component={DriverSubmit} />
          <Route exact path="/error" component={ErrorMessage} />
        </Switch>
      </Suspense>
    </Sentry.ErrorBoundary>
  );
};

export default memo(withRoot(RootContainer));
