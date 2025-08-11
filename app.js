const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const { config } = require("dotenv");
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
config();
const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connect To Database");
  } catch (error) {
    console.log("Error");
  }
};

app.get("/message", (req, res) => {
  res.json({ message: "Backend is running!" });
});

app.listen(4000, () => {
  connectToDb();
  console.log("Server is running on port 4000");
});
