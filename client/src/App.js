// src/App.js
import React from 'react'; // Make sure to import React
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';
import Stocks from './components/Stocks'; // Make sure this import is correct

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/stocks" element={<Stocks />} /> {/* Add this line for the Stocks route */}
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App; // Ensure this line is present to export the App component
