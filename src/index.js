import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { LastLocationProvider } from "react-router-last-location";
import Logger from "./Logger";

const Home = () => {
  return <h1>Hello! You are at Home!</h1>;
};

const About = () => {
  return <h1>Welcome to the Dashboard</h1>;
};

const Contact = () => {
  return <h1>Please email me!</h1>;
};

const App = () => (
  <Router>
    <LastLocationProvider>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />

        <hr />

        <Logger />
      </div>
    </LastLocationProvider>
  </Router>
);

render(<App />, document.getElementById("root"));
