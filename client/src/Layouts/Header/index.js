import React from "react";
import logo from "../../Assets/Images/Logo.svg";

const header = (
    <header id="appHeader">
        <div id="logo">
            <img src={logo} alt="appLogo"/>
        </div>
        <div id="currentDate">
            <h1>February 23, 2022 9:52PM</h1>
            <div className="countdown--bar"/>
        </div>
    </header>);

export default header;