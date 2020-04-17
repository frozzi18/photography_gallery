import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as photoActions from "../../actions/photoActions";
import { useSelector, useDispatch } from "react-redux";
import PhotoPage from "./PhotoPage";
import PropTypes from "prop-types";

const PhotosPage = () => {
  const photos = useSelector((state) => state.photos);
  console.log(photos);
  return (
    <div className="col-md-12 mt-4">
<<<<<<< HEAD
      <div className="col-md-4">
=======
      <div className="col-md-8">
>>>>>>> b9fe0c7b5b6af353c298676ad11b312627918cd0
        <h1>Photo</h1>
        <PhotoPage photos={photos} />
      </div>
    </div>
  );
};

PhotosPage.prototype = {
  photos: PropTypes.object.isRequired,
};

export default PhotosPage;
