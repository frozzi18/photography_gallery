class PhotoApi2 {
  static getAllPhoto() {
    return fetch("http://localhost:5000/photos2")
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        return error;
      });
  }
}

export default PhotoApi2;
