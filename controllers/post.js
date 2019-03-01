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
  },
  update: function(req, res) {
    const { title, content } = req.body;
    post
      .findByIdAndUpdate(req.params.id, {
        title,
        content
      })
      .then(post => {
        res.redirect(`/post/${post._id}`);
      });
  },
  delete: function(req, res) {
    Post.remove({ _id: req.params.id }).then(post => {
      console.log(item);
      res.redirect("/");
    });
  }
};

// update: (req, res) => {
//   let { content } = req.body;
//   post.findOneAndUpdate({ _id: req.params.id }){
//     title: req.body.title,
//       content: req.body.content
//   }).then(_ => {
//     res.redirect(`/post/${post._id}`);
//   });
