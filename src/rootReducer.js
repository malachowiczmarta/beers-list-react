import { combineReducers } from "redux";
import beersReducer from "./pages/beers/redux";
import addFavReducer from "./ui/redux";

const rootReducer = combineReducers({
  beers: beersReducer,
  favorite: addFavReducer
});

export default rootReducer;
