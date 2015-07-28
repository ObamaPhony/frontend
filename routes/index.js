var router = require("express").Router();
module.exports = router;

router.get("/", function (request, response) {
    response.render("index");
});

router.use(function (request, response, next) {
    response.status(404);
    response.format({
        /* plain text error */
        "text/plain": function () {
            response.send("404 Not Found");
        },

        /* valid JSON */
        "application/json": function () {
            response.send({ error: 404 });
        },

        /* fancy error page */
        "text/html": function () {
            response.render("error");
        },

        "default": function () {
            res.status(406); /* 406 Not Acceptable */
        }
    });
});
