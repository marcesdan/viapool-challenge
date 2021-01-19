import React from 'react';
import PropTypes from 'prop-types';

const ErrorMessage = ({ error, componentStack, resetError }) => (
  <>
    <div>You have encountered an error</div>
    <div>{error.toString()}</div>
    <div>{componentStack}</div>
    <button
      type="button"
      onClick={() => {
        resetError();
      }}
    >
      Click here to reset!
    </button>
  </>
);

export default ErrorMessage;

ErrorMessage.propTypes = {
  error: PropTypes.string.isRequired,
  componentStack: PropTypes.string.isRequired,
  resetError: PropTypes.func.isRequired,
};
