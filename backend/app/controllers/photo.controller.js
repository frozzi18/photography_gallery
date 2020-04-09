const Photo = require("../models/photo.model");
const { upload } = require("../models/upload.image");

// Create and Save a new Photo
const upload_multer_files = upload.single("profile");

const create = (req, res) => {
  // Create a Photo
  const photo = new Photo({
    title: req.body.title,
    image: req.file.path,
    story: req.body.story,
  });

  Photo.upload(photo, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occured while store photo",
      });
    else res.send(data);
  });
};

exports.upload_files = upload_multer_files;
exports.create_file = create;

exports.findAll = (req, res) => {
  Photo.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers.",
      });
    else res.send(data);
  });
};

exports.findId = (req, res) => {
  Photo.findById(req.params.photoId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Customer with id ${req.params.photoId}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Customer with id " + req.params.photoId,
        });
      }
    } else res.send(data);
  });
};
