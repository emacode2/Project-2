const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/Project-2", { useNewUrlParser: true });
mongoose.Promise = Promise;
module.exports = mongoose;
