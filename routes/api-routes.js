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
            id: req.user.id,
        });
    });

    // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
    // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
    // otherwise send back an error
    app.post("/api/signup", (req, res) => {
        db.User.create({
            email: req.body.email,
            password: req.body.password,
        })
            .then(() => {
                res.redirect(307, "/api/login");
            })
            .catch((err) => {
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
                id: req.user.id,
            });
        }
    });

    app.get("/exercises", (req, res) => {
        let { mainPosition } = req.query;
        let { otherPosition } = req.query;
        let { mainBowing } = req.query;
        let { otherBowing } = req.query;
        let { key } = req.query;
        let { focus } = req.query;
        let { type } = req.query;

        db.Exercises.findAll({
            where: {
                [Op.and]: [
                    { primary_positions: { [Op.like]: "%" + mainPosition + "%" } },
                    // { secondary_positions: { [Op.like]: "%" + otherPosition + "%" } },
                    { primary_bowing: { [Op.like]: "%" + mainBowing + "%" } },
                    // { secondary_bowing: { [Op.like]: "%" + otherBowing + "%" } },
                    { musical_key: { [Op.like]: "%" + key + "%" } },
                    { focus: { [Op.like]: "%" + focus + "%" } },
                    { type: { [Op.like]: "%" + type + "%" } },
                ],
            },
        }).then(function(exercises) {
            // console.log(exercises);
            res.render("exercise", { exercises });
        });
    });

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
    });


    app.get("/lessons/search", (req, res) => {
        let { term } = req.query;

        db.Objectives.findAll({
            where: {
                [Op.or]: [
                    { objective: { [Op.like]: "%" + term + "%" } },
                    { lesson_plan: { [Op.like]: "%" + term + "%" } },
                ],
            },
        }).then(function(objectives) {
            res.render("search_lessons", { objectives });
        });
    });

    app.get("/lessons/add", (req, res) => {
        db.Exercises.findAll({}).then(function(exercises) {
            // console.log(exercises);
            res.render("add_lessons", { exercises });
        });
    });

    app.post("/lessons/add", (req, res) => {
        let { objective, lesson_plan } = req.body;
        s;

        res.render("add_lessons", {
            objective,
            lesson_plan,
        });

        // Insert into table
        db.Objectives.create({
            objective,
            lesson_plan,
        }).then((Objectives) => res.redirect("/lessons"));
    });
};
