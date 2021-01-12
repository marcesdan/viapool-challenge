import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import DriverSubmit from './DriverSubmit';
import StartupRedux from '../redux/StartupRedux';
import withRoot from '../layout/withRoot';

const RootContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(StartupRedux.startup());
  }, []);
  return (
    <DriverSubmit />
  );
};

export default withRoot(RootContainer);
