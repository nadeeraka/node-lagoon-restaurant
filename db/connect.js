const driver = require("../util/secret");
const mongoose = require("mongoose");

const env = process.env.node_env === "development";

try {
  mongoose.connect(driver.aws, { useNewUrlParser: true }).then(result => {
    if (result) {
      console.log("aws connect");
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
