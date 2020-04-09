const sql = require("./db");

// constructor
const Photo = function (photo) {
  this.title_photo = photo.title;
  this.photo_path = photo.image;
  this.story = photo.story;
};

Photo.create = (newPhoto, result) => {
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

module.exports = Photo;
