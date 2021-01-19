import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import FormBox from './FormBox';

const carImg = require('../assets/images/car-open.jpg');
const logo = require('../assets/images/logo.png');

const useStyles = makeStyles((theme) => ({
  image: {
    backgroundImage: `url(${carImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    height: '100%',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
}));

const DriverInfo = () => {
  const classes = useStyles();
  // throw new Error();
  return (
    <div className={classes.image}>
      <FormBox>
        <Grid container justify="center">
          <img src={logo} alt="logo" style={{ alignSelf: 'center', marginBottom: 20 }} />
        </Grid>
        <Typography variant="h3" gutterBottom>
          La app #1 en viajes corporativos te está buscando
        </Typography>
        <Typography variant="h6" gutterBottom paragraph>
          - Manejá tranquilo todos nuestros usuarios pertenecen a empresas de primer nivel.
        </Typography>
        <Typography variant="h6" gutterBottom paragraph>
          - Acreditamos el dinero en tu cuenta bancaria (no necesitas andar con efectivo encima).
        </Typography>
        <Typography variant="h4" gutterBottom paragraph>
          ¡Unite ahora y ganá hasta $30.000 por semana!
        </Typography>
        <Typography variant="h6" gutterBottom>
          Si ya tenes toda la documentación y cumplís con los requisitos, ¡no esperes más!
          Completa el formulario y estarás cada vez más cerca de generar ingresos con tu tiempo
        </Typography>
      </FormBox>
    </div>
  );
};

export default memo(DriverInfo);
