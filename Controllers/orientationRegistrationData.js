const mongoose = require('mongoose');
const orientationRegistration = require('../Schema/orientationRegistration');
const orientationRegistrationDb = require('../Database/orientationRegistrationDb');
const asyncHandler = require("express-async-handler");





exports.orientationData_get = asyncHandler(async (req, res) => {
    await orientationRegistration.create({
        name: req.body.name,
        email: req.body.email,
        phoneNo: req.body.phoneNo,
        rollNo: req.body.rollNo,
}) });