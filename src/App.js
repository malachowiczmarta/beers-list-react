import './App.css';
import Home from './pages/home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Nav from './components/Nav';
import Table from './pages/table/Table';
import Beer from './pages/beer/Beer';
import Random from './pages/random/Random';

function App() {
  
  return (
    <div className="App">
      

      <Router>
        <Nav />
        <Switch>
          <Route path="/beers/:id">
            <Beer />
          </Route>
          <Route path="/table">
            <Table />
          </Route>
          <Route path="/random">
            <Random />
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
