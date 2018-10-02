import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Runner from "./pages/Runner";
import Signup from "./pages/Signup";
import User from "./pages/User";


import CardInfo from "./CardInfo"


const App = () => {
  return(
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/runner" component={Runner} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/user" component={User} />
          <Route exact path="/checkout" component={CardInfo} />

      
        </Switch>
      </div>
    </Router>

//Stripe js link
    // <script src="https://js.stripe.com/v3/"></script>
  );
}
export default App;
