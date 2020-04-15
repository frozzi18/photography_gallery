class PhotoApi {
  static getAllPhoto() {
    return fetch("http://localhost:5000/photos")
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        return error;
      });
  }
}

export default PhotoApi;
