const router = require("express").Router();
const express = require('express');
const userRoutes = require("./user");
const questionRoutes = require("./questions");
const bcrypt = require('bcryptjs');
let Registration = require('./schema/User');
let RouteNames = require("./constants/constants");
//NOTE  Registration route
// User routes
router.use("/user", userRoutes);
//Questions routes
router.use("/questions", questionRoutes);

module.exports = router;
