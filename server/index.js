const express = require("express");
const mongoose = require("mongoose");

const app = express();

const UserModel = require("./models/Users");

mongoose.connect(process.env.KEY);

app.get("/getUsers", (req, res) => {
  UserModel.find({}, (err, result) => {
    if (err) {
      res.json(error);
    } else {
      res.json(result);
    }
  })
});

app.listen((process.env.PORT || 3001), () => {
  console.log("Server running");
});