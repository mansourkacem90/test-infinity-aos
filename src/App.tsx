import { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import { useTasksList } from "../src/custum-hooks/use-tasks-listt";
import { useUserAuth } from "../src/custum-hooks/useUserAuth";
import { ListContext } from "../src/context/tasks-list";
import { UserContext } from '../src/context/user';

import "./App.scss";

const SignInComponent = lazy(() => import("./components/pages/sign-in"));
const TasksComponent = lazy(() => import("./components/pages/tasks"));

function App() {
  const { logIn, logOut, isAuthenticated, message } = useUserAuth();
  return (
    <Suspense fallback={<div>Loading... </div>}>
      <Router>
        <div className="App">
          <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <Link className="navbar-brand" to={"/sign-in"}>
              Todo List
            </Link>
            <div className="" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/home"}>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/tasks"}>
                    Taches
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-in"} onClick={logOut}>
                    Deconnexion
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <UserContext.Provider value={{ logIn, logOut, isAuthenticated, message }}>
            <ListContext.Provider value={{ ...useTasksList() }}>
              <div className="content-wrapper">
                <Switch>
                  <Route exact={true} path="/">
                    <Redirect to={"/sign-in"} />
                  </Route>
                  <Route
                    path="/sign-in"
                    render={() =>
                      !isAuthenticated ? (
                        <SignInComponent />
                      ) : (
                        <Redirect to={"/home"} />
                      )
                    }
                  />
                  <Route
                    path="/tasks"
                    render={() =>
                      !isAuthenticated ? (
                        <Redirect to={"/sign-in"} />
                      ) : (
                        <TasksComponent />
                      )
                    }
                  />
                  <Route
                    path="/home"
                    render={() =>
                      !isAuthenticated ? (
                        <Redirect to={"/sign-in"} />
                      ) : (
                        <TasksComponent />
                      )
                    }
                  />
                </Switch>
              </div>
            </ListContext.Provider>
          </UserContext.Provider>
        </div>
      </Router>
    </Suspense>
  );
}

export default App;
