const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/forum");
mongoose.Promise = Promise;
module.exports = mongoose;
