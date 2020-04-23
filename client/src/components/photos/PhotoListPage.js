import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function PhotoList({ photos, path }) {
  return (
    <div>
      <ul className="list-group">
        {photos.map((photo) => (
          <li key={photo.id_photo} className="list-group-item">
            <Link to={`${path}/${photo.id_photo}`}>{photo.story}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

PhotoList.propTypes = {
  photos: PropTypes.array.isRequired,
};
