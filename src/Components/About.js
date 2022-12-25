import React from "react";
import {Link} from "react-router-dom";
import NavBar from "./NavBar";
const About = () => {
    function AddAbout() {
        return (
            <div>
                <NavBar></NavBar>
                <h1 className="about"> About</h1>
                <p>Elm tree farm is an estate in the village of Chapmore End, Hertfordshire.
                The main building was built in 1926 before being expanded in 2021. 
                    The premises contains a large garden, vegetable greenhouse
                    and tennis court. 
                    
                    Elm tree farm produces its own apple juice, plum vodka and ___.
                    
                    Elm tree farm also serves as a bed and breakfast 
                </p>
            </div>
        );
    }
    return AddAbout();
}

export default About;