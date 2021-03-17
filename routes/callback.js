var express = require("express");
var router = express.Router();

router.post("/", function (req, res, next) {
  console.log("Callback: ", req);
  res.send('Great success!');
});

module.exports = router;
