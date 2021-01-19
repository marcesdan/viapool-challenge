import React from 'react';

const ErrorMessage = ({ error, componentStack, resetError }) => (
  <>
    <div>You have encountered an error</div>
    <div>{error.toString()}</div>
    <div>{componentStack}</div>
  </>
);

export default ErrorMessage;
