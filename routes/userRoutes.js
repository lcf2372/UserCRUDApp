const express = require('express');
const router = express.Router();  // Create a new Express router
const User = require('../models/User');  // Import the User model for interacting with the MongoDB collection

// Route to Display All Users
router.get('/users', async (req, res) => {
   try {
      const users = await User.find();  // Fetch all users from the database
      res.render('userlist', { users });  // Render the 'userlist' view with the users data
   } catch (error) {
      res.status(500).send("Error retrieving users.");  // Send an error message if something goes wrong
   }
});

// Route to Render the Form for Adding a New User
router.get('/add', (req, res) => {
   res.render('adduser');  // Render the 'adduser' view for the form to add a new user
});

// Route to Handle Form Submission and Add a New User
router.post('/add', async (req, res) => {
   try {
      const newUser = new User(req.body);  // Create a new User instance with the data from the form
      await newUser.save();  // Save the new user to the database
      res.redirect('/users');  // Redirect to the users list page after adding the new user
   } catch (error) {
      res.status(500).send("Error adding user.");  // Send an error message if something goes wrong
   }
});

// Route to Render the Form for Editing an Existing User
router.get('/edit/:id', async (req, res) => {
   try {
      const user = await User.findById(req.params.id);  // Find the user by their ID from the URL parameter
      res.render('edituser', { user });  // Render the 'edituser' view with the user data for editing
   } catch (error) {
      res.status(500).send("Error retrieving user data.");  // Send an error message if something goes wrong
   }
});

// Route to Handle Form Submission and Update an Existing User
router.post('/edit/:id', async (req, res) => {
   try {
      await User.findByIdAndUpdate(req.params.id, req.body);  // Update the user by ID with the data from the form
      res.redirect('/users');  // Redirect to the users list page after updating
   } catch (error) {
      res.status(500).send("Error updating user.");  // Send an error message if something goes wrong
   }
});

// Route to Delete a User
router.post('/delete/:id', async (req, res) => {
   try {
      await User.findByIdAndDelete(req.params.id);  // Find the user by ID and delete them
      res.redirect('/users');  // Redirect to the users list page after deletion
   } catch (error) {
      res.status(500).send("Error deleting user.");  // Send an error message if something goes wrong
   }
});

module.exports = router;  // Export the router for use in app.js
