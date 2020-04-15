import { combineReducers } from "redux";
import photos from "./photoReducer";

const rootReducer = combineReducers({
  photos,
});

export default rootReducer;
