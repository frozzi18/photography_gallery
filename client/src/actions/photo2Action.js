import * as types from "./actionTypes";
import PhotoApi2 from "../api/photoApiPhotoOthers";

export function loadPhoto2Success(photos2) {
  return { type: types.LOAD_PHOTOS2_SUCCESS, photos2 };
}

export function loadPhotos2() {
  return function (dispatch) {
    return PhotoApi2.getAllPhoto()
      .then((photos2) => {
        dispatch(loadPhoto2Success(photos2));
      })
      .catch((error) => {
        throw error;
      });
  };
}
