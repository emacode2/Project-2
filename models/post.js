const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Comment = new Schema({
  content: String
});

const PostSchema = new Schema({
  title: String,
  content: String,
  comment: [Comment]
});

module.exports = PostSchema;
