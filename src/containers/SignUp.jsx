// --- Post bootstrap -----
import React from 'react';
import withRoot from './modules/withRoot';
import Typography from './modules/components/Typography';
import AppForm from './modules/views/AppForm';

function SignUp() {
  return (
    <AppForm>
      <>
        <Typography variant="h3" gutterBottom marked="center" align="center">
          Sign Up
        </Typography>
      </>
    </AppForm>
  );
}

export default withRoot(SignUp);
