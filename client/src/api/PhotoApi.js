import React, { useEffect, useState } from "react";
import axios from "axios";

export default function PhotoApi() {
  let [photos, setPhotos] = useState([]);

  // async function fetchData() {
  //   const res = await fetch("http://localhost:5000/photos");
  //   res
  //     .json()
  //     .then((res) => setPhotos(res))
  //     .catch((err) => {
  //       return err;
  //     });
  // }

  useEffect(() => {
    // fetchData();

    const fetchData = async () => {
      const result = await axios("http://localhost:5000/photos");

      setPhotos(result.data);
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
