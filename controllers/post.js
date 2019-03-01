const Post = require("../models/index");
module.exports = {
  new: (req, res) => {
    res.render("new");
  },
  create: (req, res) => {
    Post.create({
      title: req.body.title,
      content: req.body.content
    }).then(_ => {
      res.redirect("/");
    });
  }
};
