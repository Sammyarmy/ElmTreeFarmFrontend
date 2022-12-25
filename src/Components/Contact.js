import React from "react";
import {Link} from "react-router-dom";
import NavBar from "./NavBar";
const Contact = () => {
    function AddContact() {
        return (
            <div>
                <NavBar></NavBar>
                <h1 className="contact"> Contact</h1>
                <p>Send us an email at contact@elmtreefarm.com</p>
            </div>
        );
    }
    return AddContact();
}

export default Contact;