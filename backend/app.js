const express = require("express");

// create an express app
const app = express();
app.use(function (req, res, next) {
  // log each request to the console
  console.log("middleware");
  next();
});

app.use((req, res, next) => {
  res.send("express...");
});

// export express app
module.exports = app;
