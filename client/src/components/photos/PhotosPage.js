// import React, { useEffect } from "react";
import React from "react";
// import * as photoActions from "../../actions/photoActions";
// import { useSelector, useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import PhotoList from "./PhotoListPage";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import PhotoPage from "./PhotoPage";

const PhotosPage = (props) => {
  const photos = useSelector((state) => state.photos);

  return (
    <div className="col-md-12 mt-4">
      <div className="row">
        <div className="col-md-4">
          <h1>Photo</h1>
          <PhotoList photos={photos} path={props.match.path} />
        </div>
        <div className="col-md-8">
          <h1>Photo Detail</h1>
          <Route path={`${props.match.path}/:id`} component={PhotoPage} />
        </div>
      </div>
    </div>
  );
};

PhotosPage.prototype = {
  photos: PropTypes.object.isRequired,
};

export default PhotosPage;
