import photoApi from "../api/photoApiPhotoGallery";
import * as types from "./actionTypes";

export function loadPhotos() {
  return function (dispatch) {
    return photoApi
      .getAllPhoto()
      .then((photos) => {
        dispatch(loadPhotosSuccess(photos));
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function loadPhotosSuccess(photos) {
  return { type: types.LOAD_PHOTOS_SUCCESS, photos };
}
