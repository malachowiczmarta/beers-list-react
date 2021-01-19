import './App.css';
import Home from './pages/home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

import rootReducer from "./rootReducer";
import Nav from './components/navigation/Nav';
import Beer from './pages/beer/Beer';
import Random from './pages/random/Random';
import Beers from './pages/beers/containers/Beers';
import Favorite from './pages/favorite/components/Favorite';

const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Nav />
          <Switch>
            <Route path="/beers/:id">
              <Beer />
            </Route>
            <Route path="/beers">
              <Beers />
            </Route>
            <Route path="/random">
              <Random />
            </Route>
            <Route path="/favorite">
              <Favorite />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </Provider>
      
    </div>
  );
}

export default App;
