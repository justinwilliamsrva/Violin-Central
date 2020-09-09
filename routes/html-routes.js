// Requiring path to so we can use relative routes to our HTML files
const path = require("path");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");
const db = require("../models");
const Sequelize = require("sequelize");
// const Op = Sequelize.Op;
const { Op } = require("sequelize");

module.exports = function(app) {
    app.get("/", (req, res) => {
        // If the user already has an account send them to the members page
        if (req.user) {
            res.redirect("/members");
        }
        res.sendFile(path.join(__dirname, "../public/signup.html"));
    });

    app.get("/login", (req, res) => {
        // If the user already has an account send them to the members page
        if (req.user) {
            res.redirect("/members");
        }
        res.sendFile(path.join(__dirname, "../public/login.html"));
    });

    // Here we've add our isAuthenticated middleware to this route.
    // If a user who is not logged in tries to access this route they will be redirected to the signup page
    app.get("/members", isAuthenticated, (req, res) => {
        res.sendFile(path.join(__dirname, "../public/members.html"));
    });


    app.get("/lessons", (req, res) => {
        let { objective } = req.query;
        let { lesson } = req.query;
        let { mainBowing } = req.query;
        let { otherBowing } = req.query;
        let { key } = req.query;
        let { focus } = req.query;
        let { type } = req.query;

        db.exercises
            .findAll({
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
            })
            .then(function(exercises) {
                // console.log(exercises);
                res.render("exercise", { exercises });
            });
    });
};
