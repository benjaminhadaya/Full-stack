import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';
import { ThemeProvider, Typography } from '@mui/material'; // Import Typography
import { getTheme } from './components/Theme';
import CssBaseline from '@mui/material/CssBaseline';
import Switch from '@mui/material/Switch';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={getTheme(darkMode)}>
      <CssBaseline />
      <div style={{ textAlign: 'center', padding: '10px' }}>
        <Typography component="span" style={{ marginRight: 8 }}>
          {darkMode ? 'Dark Mode' : 'Light Mode'}
        </Typography>
        <Switch checked={darkMode} onChange={handleThemeChange} />
      </div>
      <Router>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
