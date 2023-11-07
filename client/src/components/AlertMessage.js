import React from 'react';
import { Alert } from '@mui/material';

function AlertMessage({ severity, message }) {
  return <Alert severity={severity}>{message}</Alert>;
}

export default AlertMessage;
