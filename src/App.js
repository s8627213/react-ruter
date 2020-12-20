import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-dom";


export default function BasicExample() {return (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">主页</Link>
        </li>
        <li>
          <Link to="/about">关于</Link>
        </li>
        <li>
          <Link to="/dashboard">其他</Link>
        </li>
      </ul>

      <hr />

    
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </div>
  </Router>
);
}

function Home() {
return (
  <div>
    <h2>主页</h2>
  </div>
);
}

function About() {
return (
  <div>
    <h2>关于</h2>
  </div>
);
}

function Dashboard() {
return (
  <div>
    <h2>其他</h2>
  </div>
);
}