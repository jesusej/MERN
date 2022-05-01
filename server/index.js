const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(process.env.KEY);

app.listen((process.env.PORT || 3001), () => {
  console.log("Server running");
});