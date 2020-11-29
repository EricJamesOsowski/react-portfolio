import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar/index.js";
import Footer from "./components/Footer";
import "./App.css";


function App() {
  return (
    <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/Portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
            <Route component={Home} />
          </Switch>
          <Footer />
    </Router>
  );
}

export default App;