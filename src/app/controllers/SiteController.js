const Course = require("../models/Course");
const { multipleMongooseToObject } = require("../../utils/mongoose");

class SiteController {
    // [GET /]
    index(req, res) {
        Course.find({})
            .then((courses) =>
                res.render("home", {
                    courses: multipleMongooseToObject(courses),
                })
            )
            .catch((err) =>
                res.status(404).json({ error: "Not find courses" })
            );
    }

    // [GET /search]
    search(req, res) {
        res.render("search");
    }
}

module.exports = new SiteController();
