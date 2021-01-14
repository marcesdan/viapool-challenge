import React from 'react';
import PropTypes from 'prop-types';
import { Box, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(4, 3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(2, 4),
    },
    textAlign: 'center',
  },
}));

function FormBox(props) {
  const { children } = props;
  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <Box mt={3} mb={12}>
        <div className={classes.paper}>{children}</div>
      </Box>
    </Container>
  );
}

FormBox.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FormBox;
