import mongoose from "mongoose"; // Import Mongoose to define the schema and model

// Define the user schema
const userSchema = new mongoose.Schema({
        name: { 
                type: String, 
                required: true // Name is a required field
        },
        email: { 
                type: String, 
                required: true // Email is a required field
        },
        address: { 
                type: String, 
                required: true // Address is a required field
        }
});

// Export the "Users" model based on the user schema
export default mongoose.model("Users", userSchema);
