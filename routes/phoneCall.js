const express = require("express");
const {Services} = require("../services");
let router = express.Router({
  caseSensitive: true
});

router.get("/pop", (req, res, next) => {
  Services.PhoneCall.getBiggerPriority().then(priority => {
    console.log("this is the priority: ", priority);
    res.status(200).end(JSON.stringify(priority));
  });
});

module.exports = router;