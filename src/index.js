const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars").engine;
const methodOverride = require("method-override");
const path = require("path");

const app = express();
const port = 3000;

const route = require("./routes");
const db = require("./config/db");

app.use(methodOverride("_method"));

// Connect to db
db.connect();

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Http logger
app.use(morgan("combined"));

// Template Engine
app.engine(
    "hbs",
    handlebars({
        extname: ".hbs",
        helpers: {
            sum: (a, b) => a + b,
        },
    })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

// Routes Initial
route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
