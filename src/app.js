const express = require("express");
const app = express();
const path = require("path");

// custom vars
const PORT = 8000;

// get permission access  public folder
app.use(express.static(path.join(__dirname, "public")));

if (process.env.port) {
  app.listen(process.env.port, () => {
    console.log(`App listening on port ${process.env.port} !`);
  });
} else {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT} !`);
  });
}
