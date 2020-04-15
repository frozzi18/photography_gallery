const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
var path = require("path");
var cors = require("cors");

require("dotenv").config();
global.appRoot = path.resolve(__dirname);

const app = express();

app.use(cors());

// Use body parser for incoming data
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Simple route
app.get("/", (req, res) => {
  res.json("Welcome to photography API");
  //   res.sendfile(__dirname + "/uploads/profile-1586439445388.JPEG");
});

require("./app/routes/photo.routes")(app);

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running on port 5000");
});
