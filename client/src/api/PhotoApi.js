import React, { useEffect, useState } from "react";

// import axios from "axios";

export default function PhotoApi() {
  let [photos, setPhotos] = useState([]);

  useEffect(() => {
    // Fetch data from API
    const fetchData = async () => {
      await fetch("http://localhost:5000/photos")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setPhotos(data);
        })
        .catch((error) => {
          return error;
        });
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Photo</h1>
      {photos.map((photo) => (
        <div key={photo.id_photo}>{photo.photo_path}</div>
      ))}
    </div>
  );
}
