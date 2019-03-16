var express = require("express");
var bodyParser = require("body-parser");

//Define port the server will be listening on.
var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

//Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

//App is listening...
app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});