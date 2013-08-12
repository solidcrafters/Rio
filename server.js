var application_root = __dirname,
    express = require("express"),
    path = require("path");


var app = express();

app.use(express.logger());

app.configure(function () {
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(path.join(application_root, "dist")));
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

var port = process.env.PORT || 5000;

app.listen(port, function() {
    console.log("Listening on " + port);
});