import React from "react";
import {Link} from "react-router-dom";
const Contact = () => {
    function AddContact() {
        return (
            <div>
                <Link to="/">Home</Link>
                <h1 className="contact"> Contact</h1>
                <p>Send us an email at contact@elmtreefarm.com</p>
            </div>
        );
    }
    return AddContact();
}

export default Contact;