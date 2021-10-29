import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Detail';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
          <Header /> //header remains same for all the webpages
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/detail">
              <Detail />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
      </Router>
      {/* <Header />
      <Home /> */}
    </div>
  );
}
// function App() {
//   return (
//     <div className="App">

//       <Header />
//       <Home />
//     </div>
//   );
// }

export default App;
