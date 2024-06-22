require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const todoRoutes = require("./routes/todos");

const uri = process.env.MONGODB_CONNECTION_STRING;

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect(uri)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB", error);
  });

app.use("/api/todos", todoRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
