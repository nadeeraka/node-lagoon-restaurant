const { body, check } = require("express-validator/check");

exports.postOrder = async (req, res, next) => {
  res.render("place-order");
};
