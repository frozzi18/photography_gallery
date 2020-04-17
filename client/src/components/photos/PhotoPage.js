import React from "react";
import PropTypes from "prop-types";

export default function PhotoPage({ photos }) {
  return (
    <div>
      <ul className="list-group">
        {photos.map((photo) => (
          <li key={photo.id_photo} className="list-group-item">
            {photo.photo_path}
          </li>
        ))}
      </ul>
    </div>
  );
}

PhotoPage.propTypes = {
  photos: PropTypes.object.isRequired,
};
