import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import SignIn from "./page/loginComponent";
import SignUp from "./page/registerComponent";
import HomePage from "./page/homeComponent";
import NavigationBar from "./component/navbar";
import BookingTicket from "./page/bookingTicketComponent";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="outer">
          <NavigationBar />
          <div className="inner">
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/sign-up" component={SignUp} />
              <Route path="/sign-in" component={SignIn} />
              <Route path="/booking-ticket" component={BookingTicket} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
