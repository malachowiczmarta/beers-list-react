import { combineReducers } from "redux";
import beersReducer from "./store/reducers/beers";
import ui from "./store/reducers/ui";
import auth from "./store/reducers/auth";

const rootReducer = combineReducers({
  beers: beersReducer,
  ui: ui,
  auth: auth
});

export default rootReducer;
