const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");

function initialize(passport, getUserByEmail) {
  // users authentication
  const authenticateUsers = async (email, password, done) => {
    // get users by email
    const user = getUserByEmail(email);
    if (user == null) {
      return done(null, false, { message: "User not found" });
    }
    try {
      if (await bcrypt.compare(password, user.password)) {
        return done(null, user);
      } else {
        return done(null, false, { message: "Password incorrect" });
      }
    } catch (e) {
      console.log(e);
      return done(e);
    }
  };

  // the usernamefield can be customized to whatever you want
  passport.use(
    new LocalStrategy({ usernameField: "email" }, authenticateUsers)
  );
  passport.serializeUser((user, done) => {
    done(null, user.id); // Store user id in session
  });
  passport.deserializeUser((id, done) => {
    const user = users.find((user) => user.id === id); // Get user by ID
    done(null, user);
  });
}

module.exports = initialize;
