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
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import PropTypes from 'prop-types';
import FormContainer from './FormBox';
import Typography from './Typography';

function DriverForm({ handleSubmit, isDomainEnabled }) {
  const [isSubmitionCompleted, setSubmitionCompleted] = useState(false);

  function handleClose() {
    setSubmitionCompleted(false);
  }
  return (
    <>
      <FormContainer>
        <Typography variant="h3" gutterBottom marked="center">
          Registro
        </Typography>
        <Formik
          initialValues={{ email: '', name: '', comment: '' }}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(true);
            handleSubmit(values);
            setSubmitionCompleted(true);
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email()
              .required('Required')
              .test('is-domain-enabled', 'El ingresado dominio no se encuentra habilitado', (value) => isDomainEnabled(value)),
            nombre: Yup.string().required('Required'),
            telefono: Yup.string().required('Required'),
            edad: Yup.number().required().positive().integer(),
            marca: Yup.string().required('Required'),
            modelo: Yup.string().required('Required'),
            ano: Yup.number().required().positive().integer(),
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
            } = formikProps;
            return (
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2} gutterBottom={0}>
                  <Grid item xs={12} sm={12} md={12}>
                    <TextField
                      label="Nombre Completo"
                      name="nombre"
                      value={values.nombre}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={(errors.nombre && touched.nombre) && errors.nombre}
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
                      name="telefono"
                      value={values.comment}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={(errors.telefono && touched.telefono) && errors.telefono}
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
                      value={values.edad}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={(errors.edad && touched.edad) && errors.edad}
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
                      value={values.marca}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={(errors.marca && touched.marca) && errors.marca}
                      margin="normal"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={4}>
                    <TextField
                      label="Modelo"
                      name="modelo"
                      value={values.modelo}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={(errors.modelo && touched.modelo) && errors.modelo}
                      margin="normal"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={4}>
                    <TextField
                      label="Año"
                      name="ano"
                      value={values.ano}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={(errors.ano && touched.ano) && errors.ano}
                      margin="normal"
                      type="number"
                      variant="outlined"
                      fullWidth
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
                    loading={isSubmitting}
                  >
                    Enviar
                  </Button>
                </Grid>
              </form>
            );
          }}
        </Formik>
      </FormContainer>
      {isSubmitionCompleted
      && (
        <Dialog open={isSubmitionCompleted}>
          <DialogTitle id="form-dialog-title">Registro completado</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Gracias!
            </DialogContentText>
            <DialogActions>
              <Button
                type="button"
                className="outlined"
                onClick={handleClose}
              >
                Volver
              </Button>
            </DialogActions>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}

DriverForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  isDomainEnabled: PropTypes.func.isRequired,
};

export default DriverForm;
