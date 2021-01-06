import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import DriverSubmit from './DriverSubmit';
import StartupRedux, { StartupTypes } from '../redux/StartupRedux';

export default () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(StartupRedux.startup());
  }, []);
  return (
    <DriverSubmit />
  );
};
