import react from "react";
import ReactDom from 'react-dom';
import css from './nav.css'

function Nav() {
    return (
        <>
            <nav id="main-nav">
            <h1 id="title">Codespect</h1>
                <ul id="nav-list">
              
                    <li>See Posts</li>
                    <li>Sign up</li>
                    <li>Login</li>
                </ul>
            </nav>
        </>

    );
}


export default Nav;