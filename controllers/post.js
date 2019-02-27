const Post = require("../models/index");
module.exports = {
  new: (req, res) => {
    res.render("new");
  },
  Create: (req, res) => {
    Post.create({
      title: req.body.title,
      content: req.body.content
    }).then(_ => {
      res.redirect("/");
    });
  }
};
