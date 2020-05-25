const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const path = require("path");

//Set port
const port = process.env.PORT || 8080;

const app = express();

//Apply the middlewares
app.use(bodyParser.json());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//Set static folder
app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.render("index");
});

app.listen(port, () => {
  console.log(`The serve is running on port: ${port}`);
});
