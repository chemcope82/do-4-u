import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Runner from "./pages/Runner";
import Signup from "./pages/Signup";
import User from "./pages/User";
import UserList from "./pages/UserLists";

import CardInfo from './CardInfo';

const App = () => {
  return(
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/profile" component={Profile} /> */}
          <Route exact path="/runner" component={Runner} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/user" component={User} />
          <Route exact path="/profile/:id" component={Profile} />
          <Route exact path="/cardinfo" component={CardInfo}/>
          <Route exact path="/userlist" component={UserList} />
      
        </Switch>
      </div>
    </Router>
  )
};
  

export default App;
