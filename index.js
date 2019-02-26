const express = require("express");
const app = express();
const parser = require("body-parser");

app.set("view engine", "hbs");
app.use(require("./routes/index"));

app.listen(3500, () => console.log("listening on port 3500"));
