// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");
const { Op } = require("sequelize");

module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", (req, res) => {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(() => {
        res.redirect(307, "/api/login");
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", (req, res) => {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

  app.get("/api/exercises", (req, res) => {
    console.log(req.body);
    const mainPosition = req.body.searchParams.mainPosition;
    const otherPosition = req.body.searchParams.secondPosition;
    const mainBowing = req.body.searchParams.mainBowing;
    const otherBowing = req.body.searchParams.secondBowing;
    const key = req.body.searchParams.key;
    const focus = req.body.searchParams.focus;
    const type = req.body.searchParams.type;
    console.log("mainPosition", mainPosition);
    console.log("otherPosition", otherPosition);
    console.log("mainBowing", mainBowing);
    console.log("otherBowing", otherBowing);
    console.log("key", key);
    console.log("focus", focus);
    console.log("type", type);

<<<<<<< HEAD
    db.Exercises.findAll({
      where: {
        [Op.and]: [
          { primary_positions: mainPosition },
          { secondary_positions: otherPosition },
          { primary_bowing: mainBowing },
          { secondary_bowing: otherBowing },
          { musical_key: key },
          { focus: focus },
          { type: type }
        ]
      }
    }).then(function(exercises) {
      console.log(exercises);
      res.render("exercise", { exercises });
=======
    app.post("/lessons/add", (req, res) => {
        let { objective, lesson_plan } = req.body;
        db.Objectives.create({ objective, lesson_plan }).then((Objective) =>
            res.redirect("/lessons")
        );
    });

    app.post("/exercises/add", (req, res) => {
        let {
            exercise,
            book_title,
            author_composer,
            primary_positions,
            secondary_positions,
            primary_bowing,
            secondary_bowing,
            musical_key,
            difficulty,
            focus,
            type,
        } = req.body;

        res.render("post_exercise", {
            exercise,
            book_title,
            author_composer,
            primary_positions,
            secondary_positions,
            primary_bowing,
            secondary_bowing,
            musical_key,
            difficulty,
            focus,
            type,
        });

        // Insert into table
        db.Exercises.create({
            exercise,
            book_title,
            author_composer,
            primary_positions,
            secondary_positions,
            primary_bowing,
            secondary_bowing,
            musical_key,
            difficulty,
            focus,
            type,
        }).then((exercises) => res.redirect("/exercises/add"));
    });

    app.get("/lessons", (req, res) => {
        db.Objectives.findAll({}).then(function(objectives) {
            console.log(objectives);
            res.render("all_lessons", { objectives });
        });
>>>>>>> master
    });
  });
};
