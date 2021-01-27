import { combineReducers } from "redux";
import beersReducer from "./pages/beers/redux";
import ui from "./ui/redux";
import auth from "./store/reducers/auth";

const rootReducer = combineReducers({
  beers: beersReducer,
  ui: ui,
  auth: auth
});

export default rootReducer;
