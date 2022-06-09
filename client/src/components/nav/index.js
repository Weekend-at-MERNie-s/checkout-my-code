import react from "react";
import { Link } from "react-router-dom";
import css from "./nav.css";
import Auth from "../../utils/auth";
import { NavLink } from "react-router-dom";

function Nav() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <nav id="main-nav">
      <h1 id="title">
        <NavLink className="titleBtnLink" to="/">
          Codespect
        </NavLink>
      </h1>

      <ul id="nav-list">
        <li className="navBtn">
          <NavLink className="navBtnLink" to="/main">
            Checkout Code
          </NavLink>
        </li>

        {Auth.loggedIn() ? (
          <>
            <li className="navBtn">
              <NavLink className="navBtnLink" to="/user-page">
                My Querys
              </NavLink>
            </li>

            <li className="navBtn">
              <a className="navBtnLink" href="/" onClick={logout}>
                Logout
              </a>
            </li>
          </>
        ) : (
          <>
            <li className="navBtn">
              <NavLink className="navBtnLink" to="/login">
                Login
              </NavLink>
            </li>
            <li className="navBtn">
              <NavLink className="navBtnLink" to="/join">
                Join
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Nav;
