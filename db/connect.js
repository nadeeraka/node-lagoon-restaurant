const driver = require("../util/secret");
const mongoose = require("mongoose");

const env = process.env.node_env === "development";

const connect = async () => {
  const connection = await mongoose.connect(
    "mongodb+srv://nick:abc@cluster0-2or4b.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  );
  if (!connection) {
    console.log("connection faild");
  } else {
    console.log("connect to aws ");
  }
};

module.exports = connect;

// try {
//   mongoose
//     .connect(
//       "mongodb+srv://nick:abc@cluster0-2or4b.mongodb.net/test?retryWrites=true&w=majority",
//       { useNewUrlParser: true }
//     )
//     .then(result => {
//       if (result) {
//         console.log("aws connect..!");
//       }
//     });
// } catch (error) {
//   if (error) {
//     mongoose
//       .connect("mongodb://localhost/res", { useNewUrlParser: true })
//       .then(result => {
//         if (result) {
//           console.log("local connect");
//         }
//       });
//   }
// }

// if (!env) {
//   mongoose
//     .connect(driver.aws, { useNewUrlParser: true })
//     .then(result => {
//       if (result) {
//         console.log("aws connect");
//       }
//     })
//     .catch(err => {
//       console.error(err);
//     });
// } else {
//   mongoose
//     .connect("mongodb://localhost/res", { useNewUrlParser: true })
//     .then(result => {
//       if (result) {
//         console.log("local connect");
//       }
//     })
//     .catch(err => {
//       console.error(err);
//     });
// }
