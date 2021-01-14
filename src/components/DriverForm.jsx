import React, { useState } from 'react';
import {
  Button, Dialog, DialogActions, DialogContent,
  Grid, Icon, TextField, DialogContentText, DialogTitle,
} from '@material-ui/core';
import { Formik } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import FormContainer from './FormBox';
import Typography from './Typography';

function DriverForm({ handleSubmit, isDomainEnabled }) {
  const [isSubmitionCompleted, setSubmitionCompleted] = useState(false);

  function handleClose() {
    setSubmitionCompleted(false);
  }
  const driverSchema = Yup.object().shape({
    nombre: Yup.string().required('Required'),
    email: Yup.string()
      .email()
      .required('Required')
      .test(
        'is-domain-enabled',
        'El ingresado dominio no se encuentra habilitado',
        (value) => isDomainEnabled(value),
      ),
    telefono: Yup.string().required('Required'),
    edad: Yup.number().required().positive().integer(),
    marca: Yup.string().required('Required'),
    modelo: Yup.string().required('Required'),
    ano: Yup.number().required().positive().integer(),
  });
  return (
    <>
      <FormContainer>
        <Typography variant="h3" marked="center">
          Registro
        </Typography>
        <Formik
          initialValues={{
            nombre: '', email: '', telefono: '', edad: '', marca: '', modelo: '', ano: '',
          }}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(true);
            handleSubmit(values);
            setSubmitionCompleted(true);
          }}
          validationSchema={driverSchema}
        >
          {({
            dirty,
            errors,
            handleBlur,
            handleChange,
            handleSubmit: onSubmit,
            isSubmitting,
            touched,
            values,
          }) => (
            <form onSubmit={onSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12}>
                  <TextField
                    label="Nombre Completo"
                    name="nombre"
                    value={values.nombre}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.nombre && touched.nombre}
                    helperText={(errors.nombre && touched.nombre) && errors.nombre}
                    margin="normal"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={5}>
                  <TextField
                    label="Email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.email && touched.email}
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
                    error={errors.telefono && touched.telefono}
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
                    error={errors.edad && touched.edad}
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
                    error={errors.marca && touched.marca}
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
                    error={errors.modelo && touched.modelo}
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
                    error={errors.ano && touched.ano}
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
                >
                  Enviar
                </Button>
              </Grid>
            </form>
          )}
        </Formik>
      </FormContainer>
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
    </>
  );
}

DriverForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  isDomainEnabled: PropTypes.func.isRequired,
};

export default DriverForm;
