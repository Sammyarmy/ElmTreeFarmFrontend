import React from "react";
import {Link} from "react-router-dom";
import NavBar from "./NavBar";
const Stay = () => {
    function AddStay() {
        return (
            <div>
                <NavBar></NavBar>
                <h1 className="stay"> Stay</h1> 
        <a
            className="air-bnb-link"
            href="https://www.airbnb.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
        >
            AirBnB
        </a>
            </div>
        );
    }
    return AddStay();
}

export default Stay;