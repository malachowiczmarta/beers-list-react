import './App.css';
import Home from './pages/home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Nav from './components/navigation/Nav';
import Beer from './pages/beer/Beer';
import Random from './pages/random/Random';
import Beers from './pages/beers/containers/Beers';
import Favorite from './pages/favorite/components/Favorite';

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
