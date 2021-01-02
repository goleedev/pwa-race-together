import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const Auth = lazy(() => import("../routes/Auth"));
const About = lazy(() => import("../routes/About"));
const Home = lazy(() => import("../routes/Home"));

const App: React.FC = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/auth">Sign Up</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/auth">
          <Auth />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Suspense>
  </Router>
);

export default App;
