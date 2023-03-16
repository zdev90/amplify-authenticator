import axios from "axios";
import React, { useState, useEffect } from "react";
import { Auth, Hub } from "aws-amplify";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import BootstrapNavbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "./App.css";

function App() {
  // Track if authentication is in progress
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  // Track is the user has authenticated
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  // User object
  const [user, setUser] = useState(null);

  const _isAuthenticated = (user) => {
    if (
      !user ||
      !user.getSignInUserSession() ||
      !user.getSignInUserSession()?.isValid() // isValid() also verified the Token Signature
    ) {
      return false;
    }
    return true;
  };

  useEffect(() => {
    async function handleAuth() {
      setIsAuthenticating(true);
      try {
        const user = await Auth.currentAuthenticatedUser();
        userHasAuthenticated(_isAuthenticated(user));
        setUser(user);

        // Fetch user info
        const session = await Auth.currentSession();
        const accessToken = session.getAccessToken();
        const jwt = accessToken.getJwtToken();
        const response = await axios.post(
          `${process.env.REACT_APP_BROKER_URL}/oauth2/userInfo`,
          {},
          {
            headers: {
              Authorization: `Bearer ${jwt}`,
              "Content-Type": "application/json",
            },
          }
        );
        console.log("userInfo: ", response);
      } catch (e) {
        if (e !== "The user is not authenticated") {
          alert(e);
        }
      }
      setIsAuthenticating(false);
    }

    Hub.listen("auth", async ({ payload }) => {
      switch (payload.event) {
        case "configured":
        case "signIn":
        case "signIn_failure":
        case "signOut":
          await handleAuth();
          break;
        default:
          break;
      }
    });

    handleAuth();
  }, []);

  return (
    !isAuthenticating && (
      <Container className="App">
        <BootstrapNavbar variant="light" className="Navbar">
          <BootstrapNavbar.Brand>Auth Client App</BootstrapNavbar.Brand>
          <BootstrapNavbar.Toggle />
          <BootstrapNavbar.Collapse className="justify-content-end">
            <Nav className="Nav">
              {!isAuthenticated && (
                <>
                  <Button
                    size="md"
                    type="button"
                    variant="primary"
                    onClick={() => {
                      setIsAuthenticating(true);
                      Auth.federatedSignIn();
                    }}
                  >
                    Login
                  </Button>
                  &nbsp;
                  <Button
                    size="md"
                    type="button"
                    variant="primary"
                    onClick={() => {
                      setIsAuthenticating(true);
                      Auth.federatedSignIn({ customState: "register" });
                    }}
                  >
                    Register
                  </Button>
                </>
              )}
              {isAuthenticated && (
                <Button
                  size="md"
                  type="button"
                  variant="primary"
                  onClick={() => {
                    setIsAuthenticating(true);
                    Auth.signOut();
                  }}
                >
                  Logout
                </Button>
              )}
            </Nav>
          </BootstrapNavbar.Collapse>
        </BootstrapNavbar>
        {isAuthenticated && (
          <div className="text-center mt-5">
            You are logged in as: {user?.attributes?.email}
          </div>
        )}
      </Container>
    )
  );
}

export default App;
