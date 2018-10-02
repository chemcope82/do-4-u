const router = require("express").Router();
const userController = require("../../controllers/userController");


// Matches with "/api/user/register"
router.route("/register")
    .post(userController.create);


router.route("/")
  .get(userController.findAll);

  router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);


module.exports = router;