const mongoose = require('mongoose');
const asyncHandler = require("express-async-handler");
const orientationRegistrationDb = require('../Database/orientationRegistrationDb');
const User = require('../Schema/xpeditionRegistration');
const Game = require('../Schema/Game');

orientationRegistrationDb.connectToMongo();
exports.eventRegister_get = asyncHandler(async (req, res) => {
  try {

  
    // Check whether the user with this email exists already
    let user = await User.findOne({ email: req.body.email1 });
    if (user) {
      return res.status(400).json({ error: "Sorry a user with this email already exists" })
    }

    // Create a new user
    user = await User.create({
      teamName: req.body.teamName,
      name1: req.body.name1,
      email1: req.body.email1,
      rollNo1: req.body.rollNo1,
      phoneNo1: req.body.phoneNo1,
      name2: req.body.name2,
      email2: req.body.email2,
      rollNo2: req.body.rollNo2,
      name3: req.body.name3,
      email3: req.body.email3,
      rollNo3: req.body.rollNo3,
      name4: req.body.name4,
      email4: req.body.email4,
      rollNo4: req.body.rollNo4,
      password: req.body.password,
    });
    await Game.create({
      email1: req.body.email1,
      questionNo: "1",
      teamPoints:"5000",
    });
      
    res.send("Team Registered Successfully");

  } catch (error) {
    console.log("printing",error)
    res.status(500).send("Internal Server Error");
  }
});