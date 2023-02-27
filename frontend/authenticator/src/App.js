import React, { useState, useEffect } from "react";
import { Auth } from "aws-amplify";
import { Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Signup from "./pages/Signup";
import Reset from "./pages/Reset";
import "./App.css";

function App() {
  // Track if authentication is in progress
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  // Track is the user has authenticated
  const [isAuthenticated, userHasAuthenticated] = useState(false);

  // Props that'll be passed to all the routes
  const routeProps = { isAuthenticated, userHasAuthenticated };

  useEffect(() => {
    async function onLoad() {
      try {
        // Check if the user is authenticated
        await Auth.currentSession();
        userHasAuthenticated(true);
      } catch (e) {
        if (e !== "No current user") {
          alert(e);
        }
      }

      setIsAuthenticating(false);
    }

    onLoad();
  }, []);

  return (
    !isAuthenticating && (
      <div className="App">
        <Switch>
          <Route exact path="/login">
            <Login {...routeProps} />
          </Route>
          <Route exact path="/register">
            <Signup {...routeProps} />
          </Route>
          <Route exact path="/logout">
            <Logout {...routeProps} />
          </Route>
          <Route exact path="/reset">
            <Reset {...routeProps} />
          </Route>
        </Switch>
      </div>
    )
  );
}

export default App;
