import React from "react";

import "./index.css"

export default function Header() {
    return (
        <header>
        <nav className="nav">
          <img src="./logo192.png" alt="react-logo" className='nav-logo'/>
          <h3>ReactFacts</h3>
          <h6>React Course - Project 1</h6>
        </nav>
        </header>
    )
}