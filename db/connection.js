const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/forum");
module.exports = mongoose;
