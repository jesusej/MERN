const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const UserModel = require("./models/Users");

const app = express();

app.use(express.json());
app.use(cors());

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

app.post("/createUser", async (req, res) => {
  const user = req.body;
  const newUser = new UserModel(user);
  await newUser.save();

  res.json(user);
})

app.listen((process.env.PORT || 3001), () => {
  console.log("Server running");
});