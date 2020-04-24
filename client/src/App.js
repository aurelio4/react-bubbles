import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProtectedRoute from './components/ProtectedRoute'

import BubblePage from './components/BubblePage'
import Login from "./components/Login";
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <ProtectedRoute path="/bubbles" component={BubblePage} />
        <Route exact path="/" component={Login} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
      </div>
    </Router>
  );
}

export default App;
