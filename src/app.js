const express = require("express");
const app = express();
const path = require("path");
const db = require("../db/connect");
const bodyParser = require("body-parser");
const mainRoutes = require("../routes/basicRoues");
const apiRouts = require("../routes/apiRoutes");

// custom vars
const PORT = 8000;

// get permission access  public folder
app.use(express.static(path.join(__dirname, "public")));
// bodyParser
app.use(bodyParser.urlencoded({ extended: false }));

// custom routes
app.use(mainRoutes);
app.use(apiRouts);

// connect to db
db();

// set ejs
app.set("view engine", "ejs");
app.set("views", "views");

if (process.env.port) {
  app.listen(process.env.port, () => {
    console.log(`App listening on port ${process.env.port} !`);
  });
} else {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT} !`);
  });
}
