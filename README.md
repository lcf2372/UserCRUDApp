# User Management CRUD App

This is a simple application that allows you to manage user information. You can create, view, edit, and delete users from the system.

## Features
- **Add User**: Add new users with details like name, email, and address.
- **View Users**: View all users in a table format.
- **Edit User**: Edit existing user information.
- **Delete User**: Remove a user from the system.

## Setup

### Prerequisites
- Node.js
- MongoDB Atlas (for storing user data)

### Installation
1. Navigate to the project directory:
    ```bash
    cd usercrudapp
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Set up your MongoDB connection in `app.js` or `.env` file (provide your MongoDB URI).

4. Start the application:
    ```bash
    npm start
    ```
5. Visit the app at `http://localhost:3000`.

---

## Usage

### 1. **View Users (Users Page)**
- Go to the **Users** page (`/users`) to see a list of all users stored in the database. This page displays all user details in a table format.

### 2. **Add a New User (Add User Page)**
- Go to the **Add User** page (`/add`).
- Fill in the required fields such as First Name, Last Name, Email, Address, etc.
- Click **Add User** to save the new user.

### 3. **Edit an Existing User (Edit User Page)**
- On the **Users** page (`/users`), click **Edit** next to any user.
- You will be redirected to the **Edit User** page (`/edit/:id`), where you can update the user’s details in the form.
- Click **Save Changes** to save the updated information.

### 4. **Delete a User (Delete Function)**
- On the **Users** page (`/users`), click **Delete** next to any user to remove them from the database. This will delete the user permanently.

---

## Technologies Used
- **Node.js**: Backend server.
- **MongoDB Atlas**: Database for storing user data.
- **Bootstrap**: Frontend styling.
- **W3.CSS**: Additional responsive design.

---

