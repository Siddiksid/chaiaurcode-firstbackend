const express = require("express");
require("dotenv").config();

const app = express();

app.get("/", (req, res) => {
  res.json({
    msg: "Hello world",
  });
});

app.get("/twitter", (req, res) => {
  res.send("<h1>Please login at chai aur code </h1>");
});

app.listen(process.env.PORT, () => {
  console.log("app listening in port " + process.env.PORT);
});
