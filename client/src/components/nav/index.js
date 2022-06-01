import react from "react";
import { Link } from 'react-router-dom';
import css from './nav.css'
import { NavLink } from "react-router-dom";

function Nav() {
    return (
        <>
            <nav id="main-nav">
                <h1 id="title">Codespect</h1>
                <ul id="nav-list">

                    <li>See Posts</li>
                    <li>Sign up</li>
                    {/* <Link to="/login">Login</Link> */}

                    <li className="navBtn">
                        <NavLink className="navBtnLink" to="/login">Login</NavLink>
                    </li>
                </ul>
            </nav>
        </>

    );
}


export default Nav;