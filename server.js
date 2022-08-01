// import express from "express"
// import mongoose from "mongoose"
// import dotenv from "dotenv"
// import Cors from "cors";
// import bodyParser from "body-parser";
// import userRoutes from "./routes/users.js";
const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const Cors = require("cors")
const bodyParser = require("body-parser")
const userRoutes = require("./routes/users.js")
const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(Cors());
app.use("/", userRoutes);



const PORT = process.env.PORT || 5000
mongoose
  .connect("mongodb+srv://vai:vai@cluster0.1nvpbwp.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`server running on port ${PORT}`))
  )
  .catch((err) => console.log(err.message));