const express = require("express");
const router = express.Router();
router.use("/", require("./application.js"));
router.use("/post", require("./post"));

router.all("*", (req, res) => {
  res.status(400).send();
});

module.exports = router;

// const Post = require("../models/index");
// const postController = require("../controllers/post.js");
// ***router.post(require("./post.js"));***

// router.get("/", (req, res) => {
//   Post.find({}).then(items => {
//     console.log(items);
//     res.render("index", {
//       items
//     });
//   });
// });

// module.exports = router;
