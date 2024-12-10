import React, { useState } from "react"; // Import React and useState hook
import "./adduser.css"; // Import component-specific CSS
import { Link, useNavigate } from "react-router-dom"; // Import Link and useNavigate from react-router-dom
import axios from "axios"; // Import axios for HTTP requests
import toast from "react-hot-toast"; // Import toast for notifications

const AddUser = () => {
  // Initialize user state with empty values
  const users = {
    name: "",
    email: "",
    address: "",
  };
  const [user, setUser] = useState(users); // State to hold user input data
  const navigate = useNavigate(); // Use navigate to redirect after form submission

  // Function to handle changes in input fields
  const inputHandler = (e) => {
    const { name, value } = e.target; // Destructure name and value from the event target
    console.log(name, value); // Log changes to console for debugging

    // Update the user state with the new value for the respective field
    setUser({ ...user, [name]: value });
  };

  // Function to handle form submission
  const submitForm = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    await axios
      .post("http://localhost:8000/api/user", user) // Send POST request to backend to add a user
      .then((response) => {
        toast.success(response.data.message, { position: "top-right" }); // Show success toast
        navigate("/user"); // Redirect to home page after successful user creation
      })
      .catch((error) => {
        console.log(error); // Log any errors if the request fails
      });
  };

  return (
    <div className="addUser">
      {/* Link to go back to the home page */}
      <Link to="/" type="button" class="btn btn-secondary">
        <i class="fa-solid fa-backward"></i> Back
      </Link>

      <h3>Add New User</h3>
      <form className="addUserForm" onSubmit={submitForm}>
        {/* Input field for Name */}
        <div className="inputGroup">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            onChange={inputHandler} // Handle input changes
            name="name"
            autoComplete="off"
            placeholder="Enter your Name"
          />
        </div>
        {/* Input field for Email */}
        <div className="inputGroup">
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            onChange={inputHandler} // Handle input changes
            name="email"
            autoComplete="off"
            placeholder="Enter your Email"
          />
        </div>
        {/* Input field for Address */}
        <div className="inputGroup">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            onChange={inputHandler} // Handle input changes
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

export default AddUser; // Export AddUser component
