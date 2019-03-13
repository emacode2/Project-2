const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: String,
  content: String
});

module.exports = PostSchema;
