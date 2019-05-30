const express = require("express");
const router = express.Router();
const mainController = require("../controller/mainController");
const { body, check } = require("express-validator/check");

router.post("/order", mainController.postOrder);

module.exports = router;
