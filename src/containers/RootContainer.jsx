import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Grid from '@material-ui/core/Grid';
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
    <Grid
      container
      direction="column"
      justify="space-between"
      style={{ minHeight: '96vh' }}
    >
      <NavBar />
      <DriverSubmit />
      <Footer />
    </Grid>
  );
};

export default withRoot(RootContainer);
