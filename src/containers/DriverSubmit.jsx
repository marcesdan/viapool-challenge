import React from 'react';
import Grid from '@material-ui/core/Grid';
import { useSelector } from 'react-redux';
import DriverInfo from '../components/DriverInfo';
import DriverForm from '../components/DriverForm';
import DriversRedux, { DriversSelectors } from '../redux/DriversRedux';

const handleSubmit = (data) => DriversRedux.driversRegisterRequest(data);

const DriverSubmit = () => {
  const isDomainEnabled = (domain) => useSelector(DriversSelectors.isDomainEnabled(domain));
  return (
    <Grid
      container
      component="main"
      style={{ height: '100vh' }}
    >
      <Grid item xs={false} md={7}>
        <DriverInfo />
      </Grid>
      <Grid item xs={12} md={5} elevation={6} square style={{ alignSelf: 'center' }}>
        <DriverForm isDomainEnabled={isDomainEnabled} handleSubmit={handleSubmit} />
      </Grid>
    </Grid>
  );
};

export default DriverSubmit;
