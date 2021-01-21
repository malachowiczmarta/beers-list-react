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
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
import { PersistGate } from 'redux-persist/integration/react'

import rootReducer from "./rootReducer";
import Nav from './components/navigation/Nav';
import Beer from './pages/beer/Beer';
import Random from './pages/random/Random';
import Beers from './pages/beers/containers/Beers';
import FavoriteContainer from './pages/favorite/components/FavoriteContainer';

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['favorite'] 
};
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, applyMiddleware(thunk));
let persistor = persistStore(store)

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
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
                <FavoriteContainer />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Router>
        </PersistGate>
        
      </Provider>
      
    </div>
  );
}

export default App;
