// Author: Abinesh Pandi
// Student ID: c0917578
// Assignment: User CRUD Application

import express from "express";   
import mongoose from "mongoose"; 
import bodyParser from "body-parser"; 
import dotenv from "dotenv";     
import route from "./routes/userRoute.js"; 
import cors from "cors";         

const app = express(); 

app.use(bodyParser.json()); // Parse incoming JSON requests
app.use(cors());            // Enable CORS
dotenv.config();           // Load environment variables

const PORT = process.env.PORT || 8000;   
const MONGOURL = process.env.MONGO_URL; 

mongoose
  .connect(MONGOURL) // Connect to MongoDB
  .then(() => {
    console.log("DB connected successfully.");
    app.listen(PORT, () => { 
      console.log(`Server is running on port :${PORT} `); 
    });
  })
  .catch((error) => console.log(error)); 

app.use("/api", route); // Use userRoute for API requests
