const express = require("express");
const router = express.Router();
const Post = require("../models/index");
const postController = require("../controllers/post.js");
//router.use(require("./post.js"));

router.get("/", (req, res) => {
  Post.find({}).then(post => {
    console.log(post);
    res.render("index", {
      post
    });
  });
});

router.get("/new", postController.new);
router.post("/", postController.create);
// router.get("/:id", postController.create);
router.put("/:id", postController.update);
router.delete("/:id", postController.delete);

module.exports = router;
