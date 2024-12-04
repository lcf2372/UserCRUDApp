import React, { useEffect, useState } from "react"; // Import necessary React hooks
import "./update.css"; // Import the component-specific CSS
import { Link, useNavigate, useParams } from "react-router-dom"; // Import navigation functions from React Router
import axios from "axios"; // Import axios for making HTTP requests
import toast from "react-hot-toast"; // Import toast notifications

const UpdateUser = () => {
  // Initialize state for user data with empty values
  const users = {
    name: "",
    email: "",
    address: "",
  };
  
  // State for storing user data and form input values
  const [user, setUser] = useState(users);

  // Initialize navigate function to handle redirection
  const navigate = useNavigate();

  // Get the user ID from the URL parameters
  const { id } = useParams();

  // Input change handler to update user state when input fields change
  const inputHandler = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setUser({ ...user, [name]: value });
  };

  // Fetch user data when the component mounts or the ID changes
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/user/${id}`) // API call to get user data by ID
      .then((response) => {
        setUser(response.data); // Set the fetched user data into state
      })
      .catch((error) => {
        console.log(error); // Log errors if any
      });
  }, [id]); // Dependency array to re-fetch when the ID changes

  // Form submission handler to update user data
  const submitForm = async (e) => {
    e.preventDefault(); // Prevent default form submission
    await axios
      .put(`http://localhost:8000/api/update/user/${id}`, user) // API call to update user data
      .then((response) => {
        toast.success(response.data.message, { position: "top-right" }); // Show success notification
        navigate("/"); // Redirect to home page after successful update
      })
      .catch((error) => {
        console.log(error); // Log errors if any
      });
  };

  return (
    <div className="addUser">
      {/* Link to go back to the homepage */}
      <Link to="/" type="button" class="btn btn-secondary">
        <i class="fa-solid fa-backward"></i> Back
      </Link>

      <h3>Update User</h3>
      {/* Form to update user information */}
      <form className="addUserForm" onSubmit={submitForm}>
        {/* Name input field */}
        <div className="inputGroup">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={user.name}
            onChange={inputHandler}
            name="name"
            autoComplete="off"
            placeholder="Enter your Name"
          />
        </div>
        
        {/* Email input field */}
        <div className="inputGroup">
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            value={user.email}
            onChange={inputHandler}
            name="email"
            autoComplete="off"
            placeholder="Enter your Email"
          />
        </div>

        {/* Address input field */}
        <div className="inputGroup">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            value={user.address}
            onChange={inputHandler}
            name="address"
            autoComplete="off"
            placeholder="Enter your Address"
          />
        </div>

        {/* Submit button */}
        <div className="inputGroup">
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateUser; // Export the UpdateUser component for use in other parts of the app
