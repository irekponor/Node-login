// importing installed libraries

const express = require("express");
const app = express();
const bcrypt = require("bcrypt"); // bcrypt import
const passport = require("passport");
const initializePassport = require("./passport");
const flash = require("express-flash");
const session = require("express-session");

initializePassport(passport, (email) =>
  users.find((user) => user.email === email)
);

const users = [];

app.use(express.urlencoded({ extended: false }));

app.post("/register", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10); // 10 is a standard way of creating hashedpwd
    users.push({
      id: Date.now().toString(),
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });
    res.redirect("/login");
  } catch (e) {
    console.log(e);
    res.redirect("/register");
  }
});

// Routes
app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});
// End Routes

app.listen(3000);
