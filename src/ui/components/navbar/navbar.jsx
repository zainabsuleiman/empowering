import React from "react"
import "./navbar.css"
import logo from "./logo.png"
// import { Link } from "react-router-dom"
// import logo from "../../../data/images/logo.png"

function Navbar() {
  return (
    <div id="navbar">
        <div id="navLogo">
            <img src={logo} alt="" />
        </div>
        <div id="navUrl">
            <ul>
                <li><a href="">Company</a></li>
                <li><a href="">Investors</a></li>
                <li><a href="">Career</a></li>
                <li><a href="">Register</a></li>
                <li><a href="">Donate</a></li>
                <li><a href="">Login</a></li>
                {/* <h1>hello world navbar</h1> */}
            </ul>
        </div>
    </div>
  )
}

export default Navbar