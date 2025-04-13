// const express = require('express'); //old way
import express from "express";     //"type": "module" put this in package.json to use import
import cors from "cors"; 
import cookieParser from "cookie-parser";
import connectDB from "./utils/db.js"; 
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";

dotenv.config({});

const app = express(); //create an instance of express

//middleware
app.use(express.json()); //parse json data from request body
app.use(express.urlencoded({ extended: true })); //parse urlencoded data from request body
app.use(cookieParser()); //parse cookies from request headers

const corsOptions = {
  origin: "http://localhost:5173", //allow requests from this origin
  credentials: true, //allow credentials (cookies) to be sent with requests
};

app.use(cors(corsOptions)); //use cors middleware with options


//api routes
app.use("/api/v1/user", userRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => { 
    connectDB(); //connect to database
    console.log(`Server is running on port ${PORT}`);
})