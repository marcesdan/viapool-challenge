import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import DriverSubmit from './DriverSubmit';
import StartupRedux from '../redux/StartupRedux';
import NavBar from '../layout/NavBar';
import Footer from '../layout/Footer';
import withRoot from '../layout/withRoot';

const RootContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(StartupRedux.startup());
  }, []);
  return (
    <>
      <NavBar />
      <DriverSubmit />
      <Footer />
    </>
  );
};

export default withRoot(RootContainer);
