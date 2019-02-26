const mongoose = require("../db/connection");
const Post = new mongoose.schemma({
  title: String,
  content: String
});
const comment = new mongoose.schemma({
  content: String
});
