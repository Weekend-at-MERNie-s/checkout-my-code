import react from "react";
import { Link } from 'react-router-dom';
import css from './nav.css'
import { NavLink } from "react-router-dom";

function Nav() {
    return (
        <>
            <nav id="main-nav">

                <h1 id="title">
                    <NavLink className="navBtnLink" to="/">Codespect</NavLink>
                </h1>

                <ul id="nav-list">

                    <li className="navBtn">
                        <NavLink className="navBtnLink" to="/login">Login</NavLink>
                    </li>

                    <li className="navBtn">
                        <NavLink className="navBtnLink" to="/login">See Posts</NavLink>
                    </li>

                    <li className="navBtn">
                        <NavLink className="navBtnLink" to="/login">Sign Up</NavLink>
                    </li>
                </ul>
            </nav>
        </>

    );
}


export default Nav;