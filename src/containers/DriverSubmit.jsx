import React, { memo } from 'react';
import { Grid } from '@material-ui/core';
import DriverInfo from '../components/DriverInfo';
import DriverForm from '../components/DriverForm';

const DriverSubmit = () => (
  <Grid
    container
    component="main"
    style={{ height: '100vh' }}
  >
    <Grid item xs={false} md={7}>
      <DriverInfo />
    </Grid>
    <Grid item xs={12} md={5} elevation={6} style={{ alignSelf: 'center' }}>
      <DriverForm />
    </Grid>
  </Grid>
);

export default memo(DriverSubmit);
