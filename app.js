// Author: Abinesh Pandi
// Student ID: c0917578
// Assignment: User CRUD Application

// Import required dependencies
const express = require('express');  // Express framework for handling HTTP requests
const mongoose = require('mongoose');  // Mongoose for MongoDB object modeling
const bodyParser = require('body-parser');  // Body parser middleware for handling form data

// Initialize Express application
const app = express();

// Connect to MongoDB Atlas using Mongoose
mongoose.connect('mongodb+srv://pabinesh1998:o8ubrWOGUCKQYgei@cluster0.ubgogus.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB Atlas'))  // Success message on connection
.catch((error) => console.error('Could not connect to MongoDB:', error));  // Error message if connection fails

// Middleware setup
app.use(bodyParser.urlencoded({ extended: true }));  // Parse URL-encoded data from forms
app.use(express.static('public'));  // Serve static files like CSS, images from the 'public' folder
app.set('view engine', 'pug');  // Set Pug as the templating engine for views

// Default Route for testing the application
app.get('/', (req, res) => {
   res.send('Welcome to the User CRUD Application!');  // Send a welcome message to the browser
});

// Start the Server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
   console.log(`Server is running on http://localhost:${PORT}`);  // Log message to confirm server is running
});

// Import and use the routes from userRoutes.js
const userRoutes = require('./routes/userRoutes');  // Import routes from the userRoutes file
app.use('/', userRoutes);  // Use user routes for handling user-related HTTP requests
