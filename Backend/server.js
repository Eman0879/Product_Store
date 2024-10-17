//const express = require('')

import express from 'express';
import dotenv from "dotenv";
import path from "path";
import { connectDb } from './config/db.js'; 
// import  Product from './models/product.model.js';
// import mongoose from 'mongoose';
//import db from './config/db.js';
import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

app.use(express.json()); //allows us to accept JSON data in the req.body

// app.get("/products", (req,res) => {
//     res.send("server is ready123");
// });

app.use("/api/products", productRoutes);

if(process.env.NODE_ENV === "production") {
 app.use(express.static(path.join(__dirname, "/frontend/dist")));
 
 app.get("*", (req,res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
 });
}

console.log(process.env.MONGO_URL);

app.listen(PORT, () => {
    connectDb();
    console.log("Server started at http://localhost:" + PORT);
});