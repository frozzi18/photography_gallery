import React, { PropTypes, useEffect } from "react";
import { connect } from "react-redux";
import * as photoActions from "../../actions/photoActions";
import { useSelector, useDispatch } from "react-redux";

const PhotosPage = () => {
  const photos = useSelector((state) => state.photos);
  console.log(photos);
  return (
    <div className="col-md-12 mt-4">
      <div className="col-md-8">
        <h1>Photo</h1>
        <ul className="list-group">
          {photos.map((photo) => (
            <li key={photo.id_photo} className="list-group-item">
              {photo.photo_path}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// PhotosPage.prototype = {
//   photos: PropTypes.array.isRequired,
// };

function mapStateToProps(state, ownProps) {
  return { photos: state.photos };
}

export default PhotosPage;
