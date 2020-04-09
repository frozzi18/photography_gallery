const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const fs = require("fs");

require("dotenv").config();

const app = express();

// Use body parser for incoming data
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Simple route
app.get("/", (req, res) => {
  res.json("Welcome to photography API");
});

require("./app/routes/photo.routes")(app);

// SET STORAGE
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    let a = file.originalname.split(".");
    cb(null, `${file.fieldname}-${Date.now()}.${a[a.length - 1]}`);
  },
});

const upload = multer({ storage: storage });

// Uploading multiple files
// app.post("/uploadmultiple", upload);

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running on port 3000");
});
