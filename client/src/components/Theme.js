import { createTheme } from '@mui/material/styles';

export const getTheme = (darkMode) => {
  return createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      background: {
        default: darkMode ? '#303030' : '#fafafa', // Dark mode has a darker background
        paper: darkMode ? '#424242' : '#fff', // Adjust for components like Card, Paper
      },
    },
  });
};
