var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

// router.post("/sup", function (req, res, next) {
//   console.log("sup");
// });

router.post("/user-behaviour", function (req, res, next) {
  console.log("user-behaviour got called!!!!!!!!!!");
  console.log(req.body, "req.body");
  //store user data in database
  res.sendStatus(204);
});

module.exports = router;
