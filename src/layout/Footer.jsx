import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import Box from '@material-ui/core/Box';
import Typography from '../components/Typography';
import FormContainer from '../components/FormBox';

function Copyright() {
  return (
    <>
      <Link color="inherit" href="/">
        Viapool
      </Link>
      {' '}
      {new Date().getFullYear()}
      {'© All Rights Reserved '}
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  container: {
    display: 'flex',
  },
  iconsWrapper: {
    height: 120,
  },
  icons: {
    display: 'flex',
  },
  icon: {
    width: 48,
    height: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: theme.spacing(1),
  },
  list: {
    margin: 0,
    listStyle: 'none',
    padding: 0,
  },
  listItem: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
  },
  language: {
    marginTop: theme.spacing(1),
    width: 150,
  },
}));

const LANGUAGES = [
  {
    code: 'en-US',
    name: 'English',
  },
  {
    code: 'es-AR',
    name: 'Español',
  },
  {
    code: 'fr-FR',
    name: 'Français',
  },
  {
    code: 'pt-BR',
    name: 'Português',
  },
];

export default function AppFooter() {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <Box>
        <Typography component="footer">
          <Container>
            <Grid container spacing={5}>
              <Grid item xs={6} sm={4} md={4}>
                <Grid
                  container
                  direction="column"
                  justify="flex-end"
                  className={classes.iconsWrapper}
                  spacing={2}
                >
                  <Grid item className={classes.icons}>
                    <Icon color="primary" className={[classes.icon, 'fab fa-facebook']} fontSize="large" />
                    <Icon color="primary" className={[classes.icon, 'fab fa-twitter-square']} fontSize="large" />
                  </Grid>
                  <Grid item>
                    <Copyright />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6} sm={4} md={4}>
                <Typography variant="h6" marked="left" gutterBottom>
                  Legal
                </Typography>
                <ul className={classes.list}>
                  <li className={classes.listItem}>
                    <Link href="/premium-themes/onepirate/terms/">Terms</Link>
                  </li>
                  <li className={classes.listItem}>
                    <Link href="/premium-themes/onepirate/privacy/">Privacy</Link>
                  </li>
                </ul>
              </Grid>
              <Grid item xs={6} sm={8} md={4}>
                <Typography variant="h6" marked="left" gutterBottom>
                  Language
                </Typography>
                <TextField
                  select
                  SelectProps={{
                    native: true,
                  }}
                  className={classes.language}
                >
                  {LANGUAGES.map((language) => (
                    <option value={language.code} key={language.code}>
                      {language.name}
                    </option>
                  ))}
                </TextField>
              </Grid>
            </Grid>
          </Container>
        </Typography>
      </Box>
    </Container>
  );
}
