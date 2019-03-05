const { Post } = require("../models/post");

module.exports = {
  index: (req, res) => {
    Post.find({})
      .sort({ createdAt: -1 })
      .limit(10)
      .then(post => {
        res.render("app/index", { post });
      });
  },
  show: (req, res) => {
    res.render("show");
  }
};
