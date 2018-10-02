const router = require("express").Router();
const taskListController = require("../../controllers/taskListController");


router.route("/")
  .get(taskListController.findAll)
  .post(taskListController.create);

  router
  .route("/:id")
  .get(taskListController.findById)
  .put(taskListController.update)
  .delete(taskListController.remove);



module.exports = router;