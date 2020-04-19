import { combineReducers } from "redux";
import photos from "./photoReducer";
import photos2 from "./photo2Reducer";

const rootReducer = combineReducers({
  photos,
  photos2,
});

export default rootReducer;
