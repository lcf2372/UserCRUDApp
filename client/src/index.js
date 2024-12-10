import React from "react"; // Import React library for building UI components
import ReactDOM from "react-dom/client"; // Import ReactDOM to render the app into the DOM
import App from "./App"; // Import the main App component
import { Toaster } from "react-hot-toast"; // Import Toaster for displaying notifications

// Create a root element where the app will be rendered
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the app inside the root element
root.render(
  <React.StrictMode>
    <App />       {/* The main application component */}
    <Toaster />   {/* Toaster component for showing notifications */}
  </React.StrictMode>
);
