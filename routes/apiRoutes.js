const express = require("express");
const router = express.Router();

router.post("/order", async (req, res, next) => {
  res.render("place-order");
});

module.exports = router;
