const sql = require("./db");

// constructor
const Photo = function (photo) {
  this.title_photo = photo.title;
  this.photo_path = photo.image;
  this.story = photo.story;
};

Photo.upload = (newPhoto, result) => {
  sql.query("INSERT INTO photo_collection SET ?", newPhoto, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created photo: ", { id: res.insertId, ...newPhoto });
    result(null, { id: res.insertId, ...newPhoto });
  });
};

// Get All Photos
Photo.getAll = (result) => {
  sql.query("SELECT * FROM photo_collection", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("photos: ", res);
    result(null, res);
  });
};

// Get Photo by ID
Photo.findById = (photoId, result) => {
  sql.query(
    `SELECT * FROM photo_collection WHERE id_photo = ${photoId}`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      if (res.length) {
        console.log("found photo: ", res[0]);
        result(null, res[0]);
        return;
      }

      // not found Customer with the id
      result({ kind: "not_found" }, null);
    }
  );
};
module.exports = Photo;
