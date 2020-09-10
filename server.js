// Requiring necessary npm packages
const express = require("express");
const session = require("express-session");
const sequelizeFixtures = require("sequelize-fixtures");
const models = require("./models");
const bodyParser = require("body-parser");
// Requiring passport as we've configured it
const passport = require("./config/passport");
const exphbs = require("express-handlebars");

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 8080;
const db = require("./models");

// Creating express app and configuring middleware needed for authentication
const app = express();

// Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Requiring our routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

// sequelize_fixtures.loadFile(fixtures, db).then(function() {
//     console.log("fixture complete");
// });

// Syncing our database and logging a message to the user upon success
db.sequelize.sync({ force: true }).then(() => {
    sequelizeFixtures
        .loadFiles(
            ["fixtures/exercises.json", "fixtures/teachers.json", "fixtures/objectives.json"],
            models
        )
        .then(function() {
            console.log("Tables seeded");
        });

    app.listen(PORT, () => {
        console.log(
            "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
            PORT,
            PORT
        );
    });
});
