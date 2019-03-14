const { Post } = require("../models/index");
module.exports = {
  new: (req, res) => {
    res.render("post/new");
  },
  create: function(req, res) {
    const { title, content } = req.body;
    Post.create({
      title,
      content
    }).then(post => {
      console.log(post);
      res.redirect("/");
    });
  },
  show: function(req, res) {
    Post.findById(req.params.id).then(post => {
      res.render("post/show", { post });
    });
  },
  update: function(req, res) {
    console.log("🕰", req.body);

    Post.findOneAndUpdate(
      {
        _id: req.params.id
      },
      req.body
    ).then(post => {
      res.redirect(`/post/${post._id}`);
    });
  },
  edit: function(req, res) {
    console.log("😃", req.body);

    Post.findOneAndUpdate({ _id: req.params.id }, req.body).then(post => {
      res.render("post/edit", { post });
    });
  },
  delete: function(req, res) {
    Post.remove({ _id: req.params.id }).then(post => {
      res.redirect("/");
    });
  },
  comment: function(req, res) {
    const comment = {
      content: req.body.content
    };
    Post.findOneAndUpdate(
      { _id: req.params.id },
      { $push: { feedbacks: feedback } }
    ).then(post => {
      res.redirect(`/post/${post._id}`);
    });
  }
};

// res.redirect(`/post/${post._id}`);
