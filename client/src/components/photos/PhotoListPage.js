import React from "react";
import PropTypes from "prop-types";

export default function PhotoList({ photos }) {
  return (
    <div>
      <ul className="list-group">
        {photos.map((photo) => (
          <li key={photo.id_photo} className="list-group-item">
            {photo.story}
          </li>
        ))}
      </ul>
    </div>
  );
}

PhotoList.propTypes = {
  photos: PropTypes.array.isRequired,
};
