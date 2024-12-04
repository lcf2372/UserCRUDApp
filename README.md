# MERN Stack App

This is a simple MERN (MongoDB, Express.js, React.js, Node.js) stack application. It serves as a template for building full-stack web applications using these technologies.

## Features

- **MongoDB**: MongoDB is used as the database to store application data.
- **Express.js**: Express.js is used as the web application framework to handle server-side logic.
- **React.js**: React.js is used for building the user interface components.
- **Node.js**: Node.js is used as the server-side runtime environment.

## Installation

1. Clone the repository:

   `git clone https://github.com/lcf2372/UserCRUDApp`

2. Navigate into the project directory:

   `cd UserCRUDApp`

3. Install the backend dependencies:

   `cd backend`
   
   `npm install`

4. Install the frontend dependencies:

   `cd frontend`
   
   `npm install`

5. Set up your MongoDB database (locally or using MongoDB Atlas). Create a .env file in the backend directory and add your MongoDB connection string:

   `MONGO_URI=your-mongo-db-connection-string`

6. Run the application:

   To start both the backend and frontend servers concurrently, navigate to the root project directory and run:

   `npm run dev`

   This will start both servers:

   - Backend server on http://localhost:8000
   - Frontend server on http://localhost:3000

## Usage

Once the application is running, you can access the following functionalities:

### Add New User

- Navigate to `/add` to add a new user.
- Fill in the user details (Name, Email, Address) and submit the form.
- The data will be sent to the backend API and saved to the MongoDB database.

### View Users

- Navigate to `/` to view the list of all users.
- The users will be displayed in a table, showing their Name, Email, and Address.
- Each user will have options to Edit or Delete.

### Edit User

- Click the "Edit" button next to a user's entry to edit their information.
- Update the fields and submit the form to save changes to the backend.

### Delete User

- Click the "Delete" button next to a user's entry to remove them from the database.
- A success message will appear upon successful deletion.

## API Endpoints

The backend exposes the following RESTful API endpoints:

- `GET /api/users`: Fetches all users from the database.
- `POST /api/user`: Adds a new user to the database. Requires Name, Email, and Address in the request body.
- `GET /api/user/:id`: Fetches a user by ID for editing purposes.
- `PUT /api/update/user/:id`: Updates a user's data by ID. Requires updated data in the request body.
- `DELETE /api/delete/user/:id`: Deletes a user by ID from the database.

## Technologies Used

- MongoDB: NoSQL database for storing user data.
- Express.js: Web framework for building RESTful APIs.
- React.js: Frontend library for building user interfaces.
- Node.js: JavaScript runtime for running the backend server.
- Axios: Promise-based HTTP client for making API requests.
- react-hot-toast: For toast notifications in the frontend.
- React Router: For routing between pages in the frontend.
- Bootstrap/W3CSS: For styling the user interface.