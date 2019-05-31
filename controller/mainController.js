const { validationResult } = require("express-validator/check");
const bcrypt = require("bcryptjs");
const User = require("../model/schema/user");

exports.postOrder = async (req, res, next) => {
  res.render("place-order");
};
const hash = async pass => {
  const hp = await bcrypt.hash(pass, 12);
  if (hp) {
    return hp;
  }
};
const createUser = async (n, e, p) => {
  const newUser = new User({
    name: n,
    email: e,
    password: p
  });

  const fetchDb = await newUser.save();

  return fetchDb;

  // if (!newUser) {
  //   return false;
  // }
  // const fetchDb = await newUser.save();
  // if (fetchDb) {
  //   console.log(fetchDb);
  //   return fetchDb;
  // }
  // console.log("db error");
};

exports.postLogin = async (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const cpassword = req.body.cpassword;

  const errors = validationResult(req);

  if (errors.array().length > 0) {
    console.log(errors.array());
    return res.render("signup", {
      errors: errors.array(),
      errorsMsg: errors.array()[0].msg
    });
  }
  const hashPassword = await hash(password);
  console.log(hashPassword);
  if (hashPassword) {
    const newuser = await createUser(name, email, hashPassword);
  }

  res.render("index", { errors: false });
};
