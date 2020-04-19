import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function courseReducer(state = initialState.photos2, action) {
  switch (action.type) {
    case types.LOAD_PHOTOS2_SUCCESS:
      return action.photos;
    default:
      return state;
  }
}
