import mongoose from "mongoose";
import dotenv from "dotenv";
import users from "./data/users";
import User from "./models/userModel";
import MenuItem from "./models/orderModel";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();
