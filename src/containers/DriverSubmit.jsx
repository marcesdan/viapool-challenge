import React from 'react';
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import DriverInfo from '../components/DriverInfo';
import DriverForm from '../components/DriverForm';
import DriversRedux, { DriversSelectors } from '../redux/DriversRedux';

const DriverSubmit = ({ isDomainEnabled, handleSubmit }) => (
  <Grid
    container
    component="main"
    style={{ height: '100vh' }}
  >
    <Grid item xs={false} md={7}>
      <DriverInfo />
    </Grid>
    <Grid item xs={12} md={5} elevation={6} style={{ alignSelf: 'center' }}>
      <DriverForm
        isDomainEnabled={isDomainEnabled}
        handleSubmit={handleSubmit}
      />
    </Grid>
  </Grid>
);

const mapStateToProps = (state) => ({
  isDomainEnabled: (domain) => DriversSelectors.isDomainEnabled(state, domain),
});

const mapDispatchToProps = (dispatch) => ({
  handleSubmit: (data) => dispatch(DriversRedux.driversRegisterRequest(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DriverSubmit);
