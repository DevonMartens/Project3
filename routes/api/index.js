const router = require("express").Router();
const userRoutes = require("./user");
const questionRoutes = require("./questions");

// User routes
router.use("/user", userRoutes);
//Questions routes
router.use("/questions", questionRoutes);

module.exports = router;
