const { Photo, Photo2 } = require("../models/photo.model");
const { upload, upload2 } = require("../models/upload.image");
var path = require("path");

// Create and Save a new Photo
const upload_multer_files = upload.single("profile");
const upload_multer_files2 = upload2.single("profile");

const create2 = (req, res) => {
  // Create a Photo
  const photo = new Photo2({
    title: req.body.title,
    image: appRoot + "\\" + req.file.path,
    story: req.body.story,
  });

  Photo2.upload(photo, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occured while store photo",
      });
    else res.send(data);
  });
};

exports.upload_files2 = upload_multer_files2;
exports.create_file2 = create2;

exports.findAll2 = (req, res) => {
  Photo2.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers.",
      });
    else res.send(data);
  });
};

exports.findId2 = (req, res) => {
  Photo2.findById(req.params.photoId, (err, data) => {
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

// Update a photo identified by the photoID in the request
exports.update2 = (req, res) => {
  // Validate request

  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty",
    });
  }

  const photo = new Photo2({
    title: req.body.title,
    image: appRoot + "\\" + req.file.path,
    story: req.body.story,
  });

  Photo2.updateById(req.params.photoId, photo, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Photo with id ${req.params.photoId}.`,
        });
      } else {
        res.status(500).send({
          message: "Error updating Customer with id " + req.params.photoId,
        });
      }
    } else res.send(data);
  });
};

// Delete photo with the specified customerId in the request
exports.delete2 = (req, res) => {
  Photo2.remove(req.params.photoId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(400).send({
          message: `Not found the photo with id ${req.params.photoId}.`,
        });
      } else {
        res.status(500).send({
          message: "Could not delete Photo with id " + req.params.photoId,
        });
      }
    } else res.send({ message: `Photo was deleted successfully!` });
  });
};

// Delete all Photo from database
exports.deleteAll2 = (req, res) => {
  Photo2.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while removing all photos",
      });
    else res.send({ message: `All photos were deleted successfully` });
  });
};

// /////////////////////////////////////////////////
const create = (req, res) => {
  // Create a Photo
  const photo = new Photo({
    title: req.body.title,
    image: appRoot + "\\" + req.file.path,
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

// Update a photo identified by the photoID in the request
exports.update = (req, res) => {
  // Validate request

  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty",
    });
  }

  console.log(req.body);

  const photo = new Photo({
    title: req.body.title,
    image: appRoot + "\\" + req.file.path,
    story: req.body.story,
  });

  console.log(req.params.photoId);

  Photo.updateById(req.params.photoId, photo, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Photo with id ${req.params.photoId}.`,
        });
      } else {
        res.status(500).send({
          message: "Error updating Customer with id " + req.params.photoId,
        });
      }
    } else res.send(data);
  });
};

// Delete photo with the specified customerId in the request
exports.delete = (req, res) => {
  Photo.remove(req.params.photoId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(400).send({
          message: `Not found the photo with id ${req.params.photoId}.`,
        });
      } else {
        res.status(500).send({
          message: "Could not delete Photo with id " + req.params.photoId,
        });
      }
    } else res.send({ message: `Photo was deleted successfully!` });
  });
};

// Delete all Photo from database
exports.deleteAll = (req, res) => {
  Photo.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while removing all photos",
      });
    else res.send({ message: `All photos were deleted successfully` });
  });
};
