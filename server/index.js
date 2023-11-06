const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/users');
const app = express();
const port = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost/dashboard')
.then(() => console.log('MongoDB connected...'))
.catch(err => console.error(err));

console.log(userRoutes);
app.use('/api/users', userRoutes);


// Routes
app.use('/api/users', userRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Starting the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
