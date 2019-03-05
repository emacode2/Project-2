const express = require("express");
const router = express.Router();
//const Post = require("../models/index");
const postController = require("../controllers/post.js");
//router.use(require("./post.js"));

router.post("/", postController.create);
router.get("/new", postController.new);

router.get("/:id", postController.show);
// router.put("/:id", postController.update);
// router.delete("/:id", postController.delete);

module.exports = router;
