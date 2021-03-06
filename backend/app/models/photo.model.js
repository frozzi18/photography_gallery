const sql = require("./db");
const fs = require("fs");
var path = require("path");

// constructor
const Photo = function (photo) {
  this.title_photo = photo.title;
  this.photo_path = photo.image;
  this.story = photo.story;
};

const Photo2 = function (photo) {
  this.title_photo2 = photo.title;
  this.photo_path2 = photo.image;
  this.story2 = photo.story;
};

// Create new photo for photo2 database collection
Photo2.upload = (newPhoto, result) => {
  sql.query("INSERT INTO photo2 SET ?", newPhoto, (err, res) => {
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
Photo2.getAll = (result) => {
  sql.query("SELECT * FROM photo2", (err, res) => {
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
Photo2.findById = (photoId, result) =>
  sql.query(`SELECT * FROM photo2 WHERE id_photo2 = ${photoId}`, (err, res) => {
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
  });

// Edit Photo
Photo2.updateById = (photoId, photo, result) => {
  sql.query(
    "UPDATE photo2 SET story2 = ?, title_photo2 = ?, photo_path2 = ? WHERE id_photo2 = ?",
    [photo.story2, photo.title_photo2, photo.photo_path2, photoId],
    (err, res) => {
      if (err) {
        console.log("error : ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        result({ kind: "not found" }, null);
        return;
      }
      console.log("updated photo: ", { photoId: photoId, ...photo });
      result(null, { photoId: photoId, ...photo });
    }
  );
};

// Remove photo
Photo2.remove = (photoId, result) =>
  sql.query(`SELECT * FROM photo2 WHERE id_photo2 = ${photoId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      fs.unlink(res[0].photo_path2, (err) => {
        if (err) {
          console.log(err);
          return;
        }
      });

      sql.query(
        "DELETE FROM photo2 WHERE id_photo2 = ?",
        photoId,
        (err, res, next) => {
          if (err) {
            console.log("error : ", err);
            result(null, err);
            return;
          }

          if (res.affectedRows == 0) {
            result({ kind: "not found" }, null);
            return;
          }
          console.log("deleted photo with id: ", photoId);
          result(null, res);
        }
      );
    }
  });

// Delete all photos from the database
Photo2.removeAll = (result) => {
  sql.query("DELETE FROM photo2", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    const photo_directory = appRoot + "/uploads2";
    fs.readdir(photo_directory, (err, files) => {
      if (err) throw err;

      for (const file of files) {
        fs.unlink(path.join(photo_directory, file), (err) => {
          if (err) throw err;
        });
      }
    });

    console.log(`deleted ${res.affectedRows} photos`);
    result(null, res);
  });
};

// ////////////////////////////////////////////////////////////////////////////
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
Photo.findById = (photoId, result) =>
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

// Edit Photo
Photo.updateById = (photoId, photo, result) => {
  sql.query(
    "UPDATE photo_collection SET story = ?, title_photo = ?, photo_path = ? WHERE id_photo = ?",
    [photo.story, photo.title_photo, photo.photo_path, photoId],
    (err, res) => {
      if (err) {
        console.log("error : ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        result({ kind: "not found" }, null);
        return;
      }
      console.log("updated photo: ", { photoId: photoId, ...photo });
      result(null, { photoId: photoId, ...photo });
    }
  );
};

// Remove photo
Photo.remove = (photoId, result) =>
  sql.query(
    `SELECT * FROM photo_collection WHERE id_photo = ${photoId}`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      if (res.length) {
        fs.unlink(res[0].photo_path, (err) => {
          if (err) {
            console.log(err);
            return;
          }
        });

        sql.query(
          "DELETE FROM photo_collection WHERE id_photo = ?",
          photoId,
          (err, res, next) => {
            if (err) {
              console.log("error : ", err);
              result(null, err);
              return;
            }

            if (res.affectedRows == 0) {
              result({ kind: "not found" }, null);
              return;
            }
            console.log("deleted photo with id: ", photoId);
            result(null, res);
          }
        );
      }
    }
  );

// Delete all photos from the database
Photo.removeAll = (result) => {
  sql.query("DELETE FROM photo_collection", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    const photo_directory = appRoot + "/uploads";
    fs.readdir(photo_directory, (err, files) => {
      if (err) throw err;

      for (const file of files) {
        fs.unlink(path.join(photo_directory, file), (err) => {
          if (err) throw err;
        });
      }
    });

    console.log(`deleted ${res.affectedRows} photos`);
    result(null, res);
  });
};

module.exports = { Photo, Photo2 };
