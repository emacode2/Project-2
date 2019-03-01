const express = require("express");
const router = express.Router();
const applicationController = require("../controllers/application.js");

router.get("/", applicationController.index);

//router.use("/", require("./application.js"));
router.use("/post", require("./post"));

router.all("*", (req, res) => {
  res.status(400).send();
});

module.exports = router;
