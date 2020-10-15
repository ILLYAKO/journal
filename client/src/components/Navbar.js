import React, { useContext } from "react";
// import { NavLink, useHistory } from "react-router-dom";
import { useHistory } from "react-router-dom";

import { RegisterContext } from "../context/RegisterContext";

export const Navbar = (props) => {
  const history = useHistory();
  const regCont = useContext(RegisterContext);

  const logoutHandler = (event) => {
    event.preventDefault();
    regCont.logout();
    history.push("/");
  };
  const omdbHandler = (event) => {
    event.preventDefault();
    history.push("/omdb");
  };

  // let url = "#!";
  // console.log("Navbar isRegistered: ", props.isRegisteredd);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        Navbar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a id="omdbId" className="nav-link" onClick={omdbHandler} href="#!">
              OmDB
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#!"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#!">
                Action
              </a>
              <a className="dropdown-item" href="#!">
                Another action
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#!">
                Something else here
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#!">
              Disabled
            </a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>

        {props.isRegistered ? (
          <ul className="navbar-nav ">
            <li className="nav-item">
              <a className="nav-link" href="#!">
                SingIn <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/" onClick={logoutHandler}>
                SingOut
              </a>
            </li>
          </ul>
        ) : (
          <ul className="navbar-nav ">
            <li className="nav-item active">
              <a className="nav-link" href="/login">
                Login <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/register">
                Register <span className="sr-only">(current)</span>
              </a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};
