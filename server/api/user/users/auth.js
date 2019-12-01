const express = require("express");
const router = express.Router();

//authentication dependencies
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const bcrypt = require("bcryptjs");

require("dotenv").config();

const saltRounds = 12;
const User = require("../../../database/models/User");
const redis = require("redis");
const RedisStore = require("connect-redis")(session);
const client = redis.createClient({ url: process.env.REDIS_URL });

//calculatorModule
const calculator = require("../../../util/calculators");

router.use(
  session({
    store: new RedisStore({ client }),
    secret: process.env.REDIS_SECRET,
    resave: false,
    saveUninitialized: false
  })
);

router.use(passport.initialize());
router.use(passport.session());

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password"
    },
    function(email, password, done) {
      return new User({ email })
        .fetch({ require: false })
        .then(user => {
          if (user === null) {
            console.log("user not found");
            return done(null, false, { message: "bad username or password" });
          } else {
            user = user.toJSON();
            bcrypt.compare(password, user.password).then(res => {
              if (res) {
                return done(null, user); // this is the user that goes to serializeUser()
              } else {
                console.log("bad password");
                return done(null, false, {
                  message: "bad username or password"
                });
              }
            });
          }
        })
        .catch(err => {
          console.log("error: ", err);
          return done(err);
        });
    }
  )
);

passport.serializeUser(function(user, done) {
  console.log("serializing, user: ", user);
  return done(null, { id: user.id, email: user.email, name: user.name });
});

passport.deserializeUser(function(user, done) {
  console.log("deserializing, user: ");
  console.log(user);
  return done(null, user);
});

router.post("/login", passport.authenticate("local"), (req, res) => {
  return res.json({ session: req.user, message: `Welcome ${req.user.name}` });
});

router.post("/register", (req, res) => {
  bcrypt.genSalt(saltRounds, (err, salt) => {
    if (err) {
      console.log(err);
    } // return 500
    bcrypt.hash(req.body.password, salt, (err, hash) => {
      if (err) {
        console.log(err);
      } // return 500
      return new User(Object.assign({ ...req.body }, { password: hash }))
        .save()
        .then(user => {
          return user.toJSON();
        })
        .then(results => {
          return new User()
            .where({ id: results.id })
            .fetch({
              withRelated: ["gender_id", "activity_level_id", "goal_id"]
            })
            .then(user => {
              return user.toJSON();
            })
            .then(results => {
              let recommended_calories = calculator.recommendedCalories(
                results
              );
              console.log("recommended_calories", recommended_calories);

              return new User()
                .where({ id: results.id })
                .save(
                  { recommended_calories },
                  { method: "update", patch: true }
                )
                .then(user => {
                  return user.toJSON();
                })
                .then(results => {
                  let formInfo = Object.assign({}, { email: results.email });
                  return res
                    .status(200)
                    .json({ message: "You're all set!", formInfo });
                })
                .catch(err => {
                  console.log(err);
                  return res
                    .status(409) //"Conflict error code"
                    .json({
                      message: "That email is already being used by someone."
                    });
                });
            });
        });
    });
  });
});

router.get("/logout", (req, res) => {
  req.logout();
  return res.json({ session: {}, message: "See you again soon!" });
});

router.get("/smoke", (req, res) => {
  return res.json({ message: "I see smoke in auth." });
});

module.exports = router;
