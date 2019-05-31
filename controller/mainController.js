const { check, validationResult } = require("express-validator/check");
const bcrypt = require("bcryptjs");

exports.postOrder = async (req, res, next) => {
  res.render("place-order");
};
const hash = async pass => {
  const hp = await bcrypt.hash(pass, 12);
  if (hp) {
    return hp;
  }
};
exports.postLogin = (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const cpassword = req.body.cpassword;

  const errors = validationResult(req);

  if (errors) {
    console.log(errors.array());
    return res.render("signup", { errors: errors.array()[0].msg });
  }
  //const hashPassword = await hash(password);
  //console.log(hashPassword);
  res.render("index", { errors: false });
};
