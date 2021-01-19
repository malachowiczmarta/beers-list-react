import { combineReducers } from "redux";
import beersReducer from "./pages/beers/redux";

const rootReducer = combineReducers({
  beers: beersReducer
});

export default rootReducer;
