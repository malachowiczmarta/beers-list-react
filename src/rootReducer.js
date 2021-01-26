import { combineReducers } from "redux";
import beersReducer from "./pages/beers/redux";
import ui from "./ui/redux";

const rootReducer = combineReducers({
  beers: beersReducer,
  ui: ui
});

export default rootReducer;
