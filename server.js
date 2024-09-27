// importing installed libraries

const express = require("express");
const app = express();
const bcrypt = require("bcrypt"); // bcrypt import
const { name } = require("ejs");

const user = [];

app.use(express.urlencoded({ extended: false }));

app.post("/register", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.Password);
    users.push({
      id: Date.now().toString(),
      name: req.body.name,
      name: req.body.email,
    });
  } catch {}
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
