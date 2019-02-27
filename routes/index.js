const express = require("express");
const router = express.Router();
const Post = require("../models/index");
const postController = require("../controllers/post.js");
//router.use(require("./post.js"));

router.get("/", (req, res) => {
  Post.find({}).then(items => {
    res.render("index", {
      items
    });
  });
});

router.get("/new", postController.new);
//router.post("/", postController.create);

module.exports = router;
