import React from "react";
import Logo from "../photos/logo.png";

export default function Navbar() {
    return(
        <nav className="nav">
            <div className="nav-logo">
                <img src={Logo} className="nav-logo-image" />
                <h2 className="nav-logo-text">ReactFacts</h2>
            </div>
            <div>
                <h3 className="nav-title">React Course - Project 1</h3>
            </div>
        </nav>
    )
}