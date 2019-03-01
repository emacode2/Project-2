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

  show: function(req, res) {
    Post.findOne({ _id: req.params.id }).exec(function(err, post) {
      res.render("post/show", reports);
    });
  }
};

//   update: function(req, res) {
//     let { content } = req.body;
//     Post.findOne({ _id: req.params.id }).then(post => {
//       post.comments.push({
//         content
//       });
//       post.save(err => {
//         res.redirect(`/post/${post._id}`);
//       });
//     });
//   },

//   delete: function(req, res) {
//     Post.findOneAndRemove({ _id: req.params.id }).then(post => {
//       res.redirect("/");
//     });
//   }
//};
