var express = require("express");
var router = express.Router();
var burger = require("../models/burger");

router.get("/", (req, res) => {
  burger.all((burger_data) => {
    res.render("index", { burger_data });
  });
});

router.post("/burgers/update", (req, res) => {
  console.log(req.body);

  burger.update(req.body.burger_id, (result) => {
    console.log(result);
    res.redirect("/");
  });
});

router.post("/burgers/create", (req, res) => {
  console.log(req.body);

  burger.create(req.body.burger_name, (result) => {
    res.redirect("/");
  });
});
module.exports = router;
