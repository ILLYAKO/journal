import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { WelcomePage } from "./pages/WelcomePage";
import { RegisterPage } from "./pages/RegisterPage";
import { ErrorPage } from "./pages/ErrorPage";
import { LoginPage } from "./pages/LoginPage";
import { UserPage } from "./pages/UserPage";

export const useRoutes = (isRegistered) => {
  if (isRegistered) {
    return (
      <Switch>
        <Route path="/" exact>
          <UserPage />
        </Route>
        <Route path="/welcome" exact>
          <WelcomePage />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  }
  return (
    <Switch>
      <Route path="/" exact>
        <WelcomePage />
      </Route>
      <Route path="/login" exact>
        <LoginPage />
      </Route>
      <Route path="/register" exact>
          <RegisterPage />
        </Route>
      <Route path="/error" exact>
        <ErrorPage />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};
