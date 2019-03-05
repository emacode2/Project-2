const express = require("express");
const router = express.Router();
const Post = require("../models/index");
const postController = require("../controllers/post.js");

router.get("/", (req, res) => {
  Post.find({}).then(posts => {
    res.render("index", {
      posts
    });
  });
});

router.get("/new", postController.new);
router.post("/", postController.create);
router.get("/:id", postController.show);
// router.put("/:id", postController.update);
// router.delete("/:id", postController.delete);
router.use("/post", require("./post.js"));

module.exports = router;
