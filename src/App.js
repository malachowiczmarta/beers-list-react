import './App.css';
import Home from './pages/home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Nav from './components/Nav';
import Table from './pages/table/Table';

function App() {
  return (
    <div className="App">
      

      <Router>
        <Nav />
        <Switch>
          <Route path="/table">
            <Table />
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
