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
        <>
          <h1>Contact</h1>
          <h2>Send us a comment!</h2>
          <Formik
            initialValues={{ email: '', name: '', comment: '' }}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(true);
              alert('yes');
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
                    label="name"
                    name="name"
                    className={classes.textField}
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={(errors.name && touched.name) && errors.name}
                    margin="normal"
                  />

                  <TextField
                    error={errors.email && touched.email}
                    label="email"
                    name="email"
                    className={classes.textField}
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={(errors.email && touched.email) && errors.email}
                    margin="normal"
                  />

                  <TextField
                    label="comment"
                    name="comment"
                    className={classes.textField}
                    value={values.comment}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={(errors.comment && touched.comment) && errors.comment}
                    margin="normal"
                  />
                  <Button
                    type="button"
                    className="outline"
                    onClick={handleReset}
                    disabled={!dirty || isSubmitting}
                  >
                    Reset
                  </Button>
                  <Button type="submit" disabled={isSubmitting}>
                    Submit
                  </Button>
                  {/* <DisplayFormikState {...props} /> */}
                </form>
              );
            }}
          </Formik>
        </>
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
