import { combineReducers } from "redux";
import characterReducer from "../tile-view/slices/characterSlice";
import mapImagesReducer from "../tile-view/slices/mapImageSlice";
import statusReducer from "../tile-view/slices/statusSlice";

export default combineReducers({
  mapImagesLoaded: mapImagesReducer,
  gameStatus: statusReducer,
  character: characterReducer,
});
