const Photo = require("../models/photo.model");

// Create and Save a new Photo
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  // Create a Photo
  const photo = new Photo({
    title: req.body.title,
    image: req.body.image,
    story: req.body.story,
  });

  //   Save photo in the database
  Photo.create(photo, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occured while store photo",
      });
    else res.send(data);
  });
};
