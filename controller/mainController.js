const { validationResult } = require("express-validator/check");
const bcrypt = require("bcryptjs");
const User = require("../model/schema/user");

exports.postOrder = async (req, res, next) => {
  res.render("place-order");
};
const hash = async pass => {
  try {
    const hp = await bcrypt.hash(pass, 12);
    return hp;
  } catch (error) {
    console.error(error);
  }
};
const createUser = async (n, e, p) => {
  const validEmail = await User.findOne({ email: e });
  if (validEmail) {
    console.log("email already use");
    return false;
  }
  const newUser = new User({
    name: n,
    email: e,
    password: p
  });

  try {
    const fetchDb = await newUser.save();
    return fetchDb;
  } catch (error) {
    console.error(error);
  }
};

// ! post  signup

exports.postSignup = async (req, res, next) => {
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

// ! login

const comparePassword = async pass => {
  try {
    const result = await bcrypt.compare(pass);
    return result;
  } catch (error) {
    console.error(error);
  }
};
const findUser = async email => {
  const user = await User.findOne({ email });

  if (user) {
    return user;
  }
  return false;
};

const compare = async (e, p) => {
  const match = await User.findOne({ email: e, password: p });

  if (match) {
    return match;
  }

  try {
  } catch (error) {}
};

exports.postLogin = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  const errors = validationResult(req);
  if (errors.array().length > 0) {
    console.log(errors.array());
    res.render("login", { errors: errors.array() });
  }
  const user = await findUser(email);
  if (user) {
    //  todo:

    // const email = user.email;
    // const password = user.password;
    // const result = await compare(email, hashPassword);
    // const hashPassword = await comparePassword(password,re);

    if (result) {
      res.render("index", { title: welcome, data: result, error: false });
    }
  }

  res.render("login");
};
