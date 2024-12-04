const mongoose = require('mongoose');  // Import mongoose for database interaction

// Define the user schema for the 'users' collection in MongoDB
const userSchema = new mongoose.Schema({
   firstName: String,  // First name of the user
   lastName: String,  // Last name of the user
   dateOfBirth: Date,  // Date of birth of the user
   phoneNumber: String,  // Phone number of the user
   address1: String,  // Primary address line of the user
   address2: String,  // Secondary address line of the user
   city: String,  // City where the user lives
   postalCode: String,  // Postal code of the user's location
   country: String,  // Country where the user resides
   email: {
      type: String,  // Email of the user (string type)
      unique: true,  // Ensure the email is unique in the database
      required: true  // Email is a required field
   },
   userNotes: String,  // Additional notes about the user
});

// Create a Mongoose model for the 'User' schema
const User = mongoose.model('User', userSchema);

// Export the 'User' model so it can be used in other files
module.exports = User;
