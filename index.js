const express = require("express");
const app = express();
const parser = require("body-parser");
//const methodOverride = require("method-override");

app.use(parser.urlencoded({ extended: true }));
app.set("view engine", "hbs");
app.use(require("./routes/index"));
//app.use(methodOverride("_method"));

app.listen(3600, () => console.log("listening on port 3600"));
