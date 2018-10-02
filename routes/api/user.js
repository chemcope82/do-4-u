const router = require("express").Router();
const userController = require("../../controllers/userController");


router.route("/")
  .post(userController.create)
  .get(userController.findAll);

  router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);


module.exports = router;