module.exports = (app) => {
  const photos = require("../controllers/photo.controller.js");

  // Create a new Photo
  app.post("/photos/upload", photos.upload_files, photos.create_file);

  // Get All photos
  app.get("/photos", photos.findAll);

  // Get photo by id
  app.get("/photos/:photoId", photos.findId);
};
