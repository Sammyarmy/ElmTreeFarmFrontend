import React, {useState, useEffect, Component} from 'react';
import logo from './logo.svg';
import './App.css';
import house from './ChristmasElmTreeFarm.jpg';
import {BrowserRouter, Route, Link, Routes} from 'react-router-dom';
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from "./Components/About";
import Stay from "./Components/Stay";

class App extends Component {
    render()
    {
        return (
            <BrowserRouter>
                <Routes> 
                    <Route path="" element={<Home/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/stay" element={<Stay/>}/>
                </Routes>
            </BrowserRouter>);
    }
}

export default App;