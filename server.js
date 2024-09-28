if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

// importing installed libraries

import express, { urlencoded } from "express";
const app = express();
import { hash } from "bcrypt"; // bcrypt import
import passport, { initialize, session as _session } from "passport";
import initializePassport from "./passport";
import flash from "express-flash";
import session from "express-session";

initializePassport(passport, (email) =>
  users.find((user) => user.email === email)
);

const users = [];

app.use(urlencoded({ extended: false }));
app.use(flash());
app.use(
  session({
    secret: process.env.SECRET_KEY, // the secret_key should be what you used in the .env file
    resave: false, // if nothing is changed dont resave variable
    saveUninitialized: false,
  })
);

app.use(initialize());
app.use(_session());

app.post("/register", async (req, res) => {
  try {
    const hashedPassword = await hash(req.body.password, 10); // 10 is a standard way of creating hashedpwd
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
