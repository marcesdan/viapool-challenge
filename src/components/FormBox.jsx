import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core/styles';
import Paper from './Paper';

const styles = (theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    padding: theme.spacing(4, 3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(8, 16),
    },
  },
});

function FormBox(props) {
  const { children, classes } = props;

  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <Box mt={3} mb={12}>
          <Paper className={classes.paper}>{children}</Paper>
        </Box>
      </Container>
    </div>
  );
}

FormBox.propTypes = {
  children: PropTypes.node.isRequired,
};

export default withStyles(styles)(FormBox);
