import React from "react"
import logo from "../assets/logo.svg"

export default function Header() {
    return (
        <div className="header">
            <img src={logo} className="header--logo" />
            <h3 className="header--title">my travel journal.</h3>
        </div>
        
    )
}