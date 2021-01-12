import React from 'react';
import Grid from '@material-ui/core/Grid';
import DriverInfo from '../components/DriverInfo';
import DriverForm from '../components/DriverForm';

function DriverSubmit() {
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
        <DriverForm />
      </Grid>
    </Grid>
  );
}

export default DriverSubmit;
