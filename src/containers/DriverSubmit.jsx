import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import * as Yup from 'yup';
import Typography from '../components/Typography';
import FormContainer from '../components/FormBox';

// import { DisplayFormikState } from './formikHelper';

const styles = {

};

function DriverSubmit(props) {
  const { classes } = props;
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
                  <TextField
                    label="Nombre Completo"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={(errors.name && touched.name) && errors.name}
                    margin="normal"
                  />

                  <TextField
                    error={errors.email && touched.email}
                    label="Email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={(errors.email && touched.email) && errors.email}
                    margin="normal"
                  />
                  <TextField
                    label="Teléfono"
                    name="phone"
                    value={values.comment}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={(errors.comment && touched.comment) && errors.comment}
                    margin="normal"
                    type="date"
                  />
                  <TextField
                    label="Marca"
                    name="marca"
                    value={values.comment}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={(errors.comment && touched.comment) && errors.comment}
                    margin="normal"
                  />
                  <TextField
                    label="Modelo"
                    name="modelo"
                    value={values.comment}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={(errors.comment && touched.comment) && errors.comment}
                    margin="normal"
                  />
                  <TextField
                    label="Año"
                    name="ano"
                    value={values.comment}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={(errors.comment && touched.comment) && errors.comment}
                    margin="normal"
                    type="number"
                  />
                  <Button type="submit" disabled={isSubmitting}>
                    Submit
                  </Button>
                  {/* <DisplayFormikState {...props} /> */}
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
                className="outline"
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

export default withStyles(styles)(DriverSubmit);
