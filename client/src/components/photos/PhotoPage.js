import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

export default function PhotoPage(props) {
  const photoID = parseInt(props.match.params.id);
  const photos = useSelector((state) => state.photos);

  const photo = photos.filter((photo) => photo.id_photo === photoID);
  console.log(photo);
  return (
    <React.Fragment>
      {photo.map((photo) => (
        <div key={photo.id_photo}>
          <p>Id : {photo.id_photo}</p>
          <p>Title : {photo.title_photo}</p>
          <p>Story : {photo.story}</p>
        </div>
      ))}
    </React.Fragment>
  );
}

PhotoPage.prototype = {
  photos: PropTypes.object.isRequired,
};
