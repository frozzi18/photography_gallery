module.exports = (app) => {
  const photos = require("../controllers/photo.controller.js");
  const photos2 = require("../controllers/photo.controller.js");

  // Create a new Photo
  app.post("/photos/upload2", photos2.upload_files2, photos2.create_file2);

  // Get All photos
  app.get("/photos2", photos2.findAll2);

  // Get photo by id
  app.get("/photos2/:photoId", photos2.findId2);

  // Update a photo by Id
  app.put("/photos2/:photoId", photos2.upload_files2, photos2.update2);

  // Delete photo by Id
  app.delete("/photos2/:photoId", photos2.delete2);

  // Remove all files
  app.delete("/photos2", photos2.deleteAll2);

  // ////////////////////////////////////////////////////
  // Create a new Photo
  app.post("/photos/upload", photos.upload_files, photos.create_file);

  // Get All photos
  app.get("/photos", photos.findAll);

  // Get photo by id
  app.get("/photos/:photoId", photos.findId);

  // Update a photo by Id
  app.put("/photos/:photoId", photos.upload_files, photos.update);

  // Delete photo by Id
  app.delete("/photos/:photoId", photos.delete);

  // Remove all files
  app.delete("/photos", photos.deleteAll);
};
