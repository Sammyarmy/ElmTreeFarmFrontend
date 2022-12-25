import React from "react";
import {Link} from "react-router-dom";
const NavBar = () => {
    function AddNavBar() {
        return (
            <div className="navbar">
                <Link to="/">Home</Link>
                <Link to="/stay">Stay</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/about">About</Link>
            </div>
        );
    }
    return AddNavBar();
}

export default NavBar;