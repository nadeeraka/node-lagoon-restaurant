const driver = require("../util/secret");
const mongoose = require("mongoose");

const env = process.env.node_env === "development";

// const connect = async () => {
//   const connection = await mongoose.connect(driver.asw, {
//     useNewUrlParser: true
//   });
//   if (!connection) {
//     console.log("connection faild");
//   } else {
//     console.log("connect to aws ");
//   }
// };

//module.exports = connect;
const connect = async () => {
  try {
    mongoose.connect(driver.AWS, { useNewUrlParser: true }).then(result => {
      if (result) {
        console.log("aws connect..!");
      }
    });
  } catch (error) {
    if (error) {
      mongoose
        .connect("mongodb://localhost/res", { useNewUrlParser: true })
        .then(result => {
          if (result) {
            console.log("local connect");
          }
        });
    }
  }
};
module.exports = connect;
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
