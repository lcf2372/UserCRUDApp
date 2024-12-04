import React, { useEffect, useState } from "react"; // Import React and hooks
import "./user.css"; // Import component-specific CSS
import axios from "axios"; // Import axios for HTTP requests
import { Link } from "react-router-dom"; // Import Link from react-router-dom for navigation
import toast from "react-hot-toast"; // Import toast for notifications

const User = () => {
  const [users, setUsers] = useState([]); // State to hold user data

  // Use effect to fetch users when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/users"); // Get user data from API
        setUsers(response.data); // Set the user data in state
      } catch (error) {
        console.log("Error while fetching data", error); // Log any errors during fetching
      }
    };
    fetchData(); // Invoke the function to fetch data
  }, []); // Empty dependency array means it runs only once when the component mounts

  // Function to delete a user
  const deleteUser = async (userId) => {
    await axios
      .delete(`http://localhost:8000/api/delete/user/${userId}`) // Send DELETE request to delete user by ID
      .then((response) => {
        setUsers((prevUser) => prevUser.filter((user) => user._id !== userId)); // Remove the deleted user from state
        toast.success(response.data.message, { position: "top-right" }); // Show success message
      })
      .catch((error) => {
        console.log(error); // Log any errors during the deletion
      });
  };

  return (
    <div className="userTable">
      {/* Link to the Add User page */}
      <Link to="/add" type="button" class="btn btn-primary">
        Add User <i class="fa-solid fa-user-plus"></i>
      </Link>

      {/* Table to display users */}
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">S.No.</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Map through users and display them in the table */}
          {users.map((user, index) => {
            return (
              <tr key={user._id}> {/* Unique key for each row */}
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.address}</td>
                <td className="actionButtons">
                  {/* Link to update user */}
                  <Link
                    to={`/update/` + user._id}
                    type="button"
                    class="btn btn-info"
                  >
                    <i class="fa-solid fa-pen-to-square"></i>
                  </Link>

                  {/* Button to delete user */}
                  <button
                    onClick={() => deleteUser(user._id)}
                    type="button"
                    class="btn btn-danger"
                  >
                    <i class="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default User; // Export User component for use in other parts of the app
