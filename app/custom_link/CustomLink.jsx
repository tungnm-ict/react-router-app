import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Home.jsx';
import About from './About.jsx';
import MenuLink from './MenuLink.jsx';
export default class CustomLink extends React.Component {
  render() {
    return (
      <Router>
      <div>
        <MenuLink activeOnlyWhenExact={true} to="/" label="Home" />
        <MenuLink to="/about" label="About" />
        <hr />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </div>
    </Router>
    );
  }
}