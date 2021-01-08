import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Formik } from 'formik';
import * as Yup from 'yup';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import Typography from '../components/Typography';
import FormContainer from '../components/FormBox';

// import { DisplayFormikState } from './formikHelper';

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
  },
  margin: {
    // margin: theme.spacing(2),
  },
}));

function DriverSubmit(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [isSubmitionCompleted, setSubmitionCompleted] = useState(false);

  function handleClose() {
    setOpen(false);
    setSubmitionCompleted(false);
  }
  return (
    <>
      {!isSubmitionCompleted
        && (
        <FormContainer>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Sign Up
          </Typography>
          <Formik
            initialValues={{ email: '', name: '', comment: '' }}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(true);
              setSubmitionCompleted(true);
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email()
                .required('Required'),
              name: Yup.string()
                .required('Required'),
              comment: Yup.string()
                .required('Required'),
            })}
          >
            {(formikProps) => {
              const {
                values,
                touched,
                errors,
                dirty,
                isSubmitting,
                handleChange,
                handleBlur,
                handleSubmit,
                handleReset,
              } = formikProps;
              return (
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={2} className={classes.root}>
                    <Grid item xs={12} sm={12} md={12}>
                      <TextField
                        label="Nombre Completo"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={(errors.name && touched.name) && errors.name}
                        margin="normal"
                        variant="outlined"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} md={5}>
                      <TextField
                        error={errors.email && touched.email}
                        label="Email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={(errors.email && touched.email) && errors.email}
                        margin="normal"
                        variant="outlined"
                        type="email"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} md={5}>
                      <TextField
                        label="Teléfono"
                        name="phone"
                        value={values.comment}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={(errors.comment && touched.comment) && errors.comment}
                        margin="normal"
                        type="tel"
                        variant="outlined"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} md={2}>
                      <TextField
                        label="Edad"
                        name="edad"
                        value={values.comment}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={(errors.comment && touched.comment) && errors.comment}
                        margin="normal"
                        type="number"
                        variant="outlined"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                      <TextField
                        label="Marca"
                        name="marca"
                        value={values.comment}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={(errors.comment && touched.comment) && errors.comment}
                        margin="normal"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                      <TextField
                        label="Modelo"
                        name="modelo"
                        value={values.comment}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={(errors.comment && touched.comment) && errors.comment}
                        margin="normal"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                      <TextField
                        label="Año"
                        name="ano"
                        value={values.comment}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={(errors.comment && touched.comment) && errors.comment}
                        margin="normal"
                        type="number"
                        variant="outlined"
                      />
                    </Grid>
                    {/* <DisplayFormikState {...props} /> */}
                  </Grid>
                  <Grid container justify="center" style={{ marginTop: 30 }}>
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      disabled={isSubmitting}
                      size="large"
                      startIcon={<Icon className="far fa-paper-plane" />}
                    >
                      Submit
                    </Button>
                  </Grid>
                </form>
              );
            }}
          </Formik>
        </FormContainer>
        )}
      {isSubmitionCompleted
        && (
        <Dialog open={isSubmitionCompleted}>
          <DialogTitle id="form-dialog-title">Thanks!</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Thanks
            </DialogContentText>
            <DialogActions>
              <Button
                type="button"
                className="outlined"
                onClick={handleClose}
              >
                Back to app
              </Button>
              {/* <DisplayFormikState {...props} /> */}
            </DialogActions>
          </DialogContent>
        </Dialog>
        )}
    </ >
  );
}

export default DriverSubmit;
