import express from "express";   
import { 
  create, 
  deleteUser, 
  getAllUsers, 
  getUserById, 
  update 
} from "../controller/userController.js"; 

const route = express.Router(); 

// Define routes for user CRUD operations
route.post("/user", create); // Route to create a new user
route.get("/users", getAllUsers); // Route to get all users
route.get("/user/:id", getUserById); // Route to get a user by ID
route.put("/update/user/:id", update); // Route to update a user by ID
route.delete("/delete/user/:id", deleteUser); // Route to delete a user by ID

export default route; 
