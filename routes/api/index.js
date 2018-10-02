const router = require("express").Router();
const userRoutes = require("./user");
const taskListRoutes = require ("./taskList");
const loginRoutes = require ("./login");


router.use("/user", userRoutes);
router.use("/tasklist", taskListRoutes);
router.use("/login", loginRoutes);

module.exports = router;