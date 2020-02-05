const router = require("express").Router();
const questionController = require("../../controllers/questionController");


router.route("/")
  .get(questionController.findAll)
  .post(questionController.create);

router
  .route("/:id")
  .get(questionController.findById)
  .put(questionController.update)
  .delete(questionController.remove);

module.exports = router;