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
    console.log("hello there");
    Post.findById(req.params.id).then(post => {
       res.render("post/show", { post });
     });
  }
  //   update: function(req, res) {
  //     const { title, content } = req.body;

  //     Post.findByIdAndUpdate(req.params.id, {
  //       title,
  //       content
  //     }).then(item => {
  //       res.redirect(`/item/${post._id}`);
  //     });
  //   }
  // };

  // //   delete: function(req, res) {
  // //     Post.findOneAndRemove({ _id: req.params.id }).then(post => {
  // //       res.redirect("/");
  // //     });
  // //   }
};
