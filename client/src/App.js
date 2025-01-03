import "./App.css"; // Import the main stylesheet for the application
import LoginPage from "./LoginPage"; // Import the LoginPage component
import AddUser from "./adduser/AddUser"; // Import the AddUser component
import User from "./getuser/User"; // Import the User component to display users
import Update from "./updateuser/Update"; // Import the Update component for updating users
import { RouterProvider, createBrowserRouter } from "react-router-dom"; // Import React Router for navigation
import { AuthProvider } from './context/AuthContext'; // Import AuthProvider for authentication context

function App() {
  // Define routes for the application
  const route = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />, // Route for login page
    },
    {
      path: "/user",
      element: <User />, // Default route to display all users
    },
    {
      path: "/add",
      element: <AddUser />, // Route to add a new user
    },
    {
      path: "/update/:id",
      element: <Update />, // Route to update user by ID
    },
  ]);

  return (
    <AuthProvider>
      <div className="App">
        {/* Set up RouterProvider to handle routing in the app */}
        <RouterProvider router={route}></RouterProvider>
      </div>
    </AuthProvider>
  );
}

export default App; // Export the App component for use in index.js