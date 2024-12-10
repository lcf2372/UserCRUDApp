import User from "../model/userModel.js"; // Import the User model to interact with the database

// Create a new user
export const create = async (req, res) => {
  try {
    const newUser = new User(req.body); // Create a new user instance with request data
    const { email } = newUser; // Destructure email from the new user

    // Check if the user already exists based on email
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "User already exists." });
    }
    // Save the new user to the database
    const savedData = await newUser.save();
    // res.status(200).json(savedData); // Optional: Send saved data back in the response
    res.status(200).json({ message: "User created successfully." }); // Success message
  } catch (error) {
    res.status(500).json({ errorMessage: error.message }); // Error handling
  }
};

// Get all users
export const getAllUsers = async (req, res) => {
  try {
    const userData = await User.find(); // Retrieve all users from the database
    if (!userData || userData.length === 0) {
      return res.status(404).json({ message: "User data not found." });
    }
    res.status(200).json(userData); // Send all users in the response
  } catch (error) {
    res.status(500).json({ errorMessage: error.message }); // Error handling
  }
};

// Get a user by ID
export const getUserById = async (req, res) => {
  try {
    const id = req.params.id; // Get the user ID from the request parameters
    const userExist = await User.findById(id); // Find user by ID
    if (!userExist) {
      return res.status(404).json({ message: "User not found." });
    }
    res.status(200).json(userExist); // Send the found user data in the response
  } catch (error) {
    res.status(500).json({ errorMessage: error.message }); // Error handling
  }
};

// Update a user by ID
export const update = async (req, res) => {
  try {
    const id = req.params.id; // Get the user ID from the request parameters
    const userExist = await User.findById(id); // Check if user exists
    if (!userExist) {
      return res.status(404).json({ message: "User not found." });
    }
    // Update user data in the database
    const updatedData = await User.findByIdAndUpdate(id, req.body, { new: true });
    // res.status(200).json(updatedData); // Optional: Send updated data in the response
    res.status(200).json({ message: "User Updated successfully." }); // Success message
  } catch (error) {
    res.status(500).json({ errorMessage: error.message }); // Error handling
  }
};

// Delete a user by ID
export const deleteUser = async (req, res) => {
  try {
    const id = req.params.id; // Get the user ID from the request parameters
    const userExist = await User.findById(id); // Check if user exists
    if (!userExist) {
      return res.status(404).json({ message: "User not found." });
    }
    await User.findByIdAndDelete(id); // Delete the user from the database
    res.status(200).json({ message: "User deleted successfully." }); // Success message
  } catch (error) {
    res.status(500).json({ errorMessage: error.message }); // Error handling
  }
};
