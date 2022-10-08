var _ = require('lodash');
var express = require("express");
var router = express.Router();


var versionInfo = "v1.0";

router.get("/info", function (req, res, next) {
    console.log("version", versionInfo);
    var html = "<html><head>";
    html += "</head><body>";
    html += "<h2> Version: " + versionInfo + "</h2>";

    html += "</body></html>";
    res.setHeader("content-type", "text/html");
    res.send(html);
});


module.exports = router;