const express = require("express");
const router = express.Router();
const postController = require("../controllers/post");

router.post("/", postController.create);
router.get("/new", postController.new);

router.get("/:id", postController.show);
router.put("/:id/edit", postController.update);
router.get("/:id/edit", postController.edit);
router.put("/:id/edit", postController.update);
outer.put("/:id", postController.update);
router.delete("/:id", postController.delete);

module.exports = router;
