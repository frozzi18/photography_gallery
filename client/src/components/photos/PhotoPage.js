import React, { useState } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

export default function PhotoPage(props) {
  const photoID = parseInt(props.match.params.id);
  const photos = useSelector((state) => state.photos);
  const photos2 = useSelector((state) => state.photos2);

  const [isEditing, setIsEditing] = useState(false);

  function toggleEdit() {
    setIsEditing(!isEditing);
  }

  function updatePhotoState(event) {
    const story = event.target.story;
    const title = event.target.title;
  }

  const photo = photos.filter((photo) => photo.id_photo === photoID);

  if (isEditing) {
    return (
      <div>
        <h1>Edit Cat</h1>
        <h1>Form will come after this</h1>
      </div>
    );
  }
  return (
    <React.Fragment>
      {photo.map((photo) => (
        <div key={photo.id_photo}>
          <p>Id : {photo.id_photo}</p>
          <p>Title : {photo.title_photo}</p>
          <p>Story : {photo.story}</p>
        </div>
      ))}
      <button onClick={toggleEdit} className="btn btn-primary">
        Edit
      </button>
      <br />
      <br />
      <div>
        {photos2.map((photo) => (
          <div key={photo.id_photo2}>
            <p>Title : {photo.title_photo2}</p>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}

PhotoPage.prototype = {
  photos: PropTypes.object.isRequired,
};
