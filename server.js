// importing installed libraries

const express = require("express");
const app = express();

const user = [];

app.use(express.urlencoded({ extended: false }));

// routes
app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});
// end routes

app.listen(3000);
