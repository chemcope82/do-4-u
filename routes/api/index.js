const router = require("express").Router();
const userRoutes = require("./user");
const taskListRoutes = require ("./taskList");


router.use("/user", userRoutes);
router.use("/tasklist", taskListRoutes);

module.exports = router;