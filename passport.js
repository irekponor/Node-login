const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");

function initialize(passport) {
  // users authentication
  const authenticateUsers = async (email, password, done) => {

    // get users by email
    const user = getUserByEmail(email);
    if (user == null) {
      return done(null, false, { message: "User not found" });
    }
    try {
        if (await)
    } catch (e) {
        
    }

  };
}
