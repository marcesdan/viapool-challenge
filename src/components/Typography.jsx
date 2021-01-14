import React from 'react';
import PropTypes from 'prop-types';
import {capitalize} from '@material-ui/core/utils';
import {Typography as MuiTypography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  markedH2Center: {
    height: 4,
    width: 73,
    display: 'block',
    margin: `${theme.spacing(1)}px auto 0`,
    backgroundColor: theme.palette.secondary.main,
  },
  markedH3Center: {
    height: 4,
    width: 55,
    display: 'block',
    margin: `${theme.spacing(1)}px auto 0`,
    backgroundColor: theme.palette.secondary.main,
  },
  markedH4Center: {
    height: 4,
    width: 55,
    display: 'block',
    margin: `${theme.spacing(1)}px auto 0`,
    backgroundColor: theme.palette.secondary.main,
  },
  markedH6Left: {
    height: 2,
    width: 28,
    display: 'block',
    marginTop: theme.spacing(0.5),
    background: 'currentColor',
  },
}));

const Typography = (props) => {
  const {
    children,
    marked = false,
    variant,
  } = props;
  const classes = useStyles();
  const className = classes[`marked${capitalize(variant) + capitalize(marked)}`]
  return (
    <MuiTypography variant={variant} gutterBottom>
      {children}
      {marked ? (
        <span
          className={className}
        />
      ) : null}
    </MuiTypography>
  );
};

Typography.propTypes = {
  children: PropTypes.node.isRequired,
  marked: PropTypes.oneOf([false, 'center', 'left']),
  variant: PropTypes.string,
};

Typography.defaultProps = {
  marked: null,
  variant: null,
};

export default Typography;
