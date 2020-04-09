module.exports = (app) => {
  const photos = require("../controllers/photo.controller.js");

  // Create a new Photo
  app.post("/photos", photos.create);
};
