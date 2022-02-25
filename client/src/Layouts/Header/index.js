import React, {useEffect, useState} from "react";
import logo from "../../Assets/Images/Logo.svg";

function Header() {

    const [currentTime, setCurrentTime] = useState(new Date());

    function refreshCurrentTime() {
        setCurrentTime(new Date());
    }


    useEffect(() => {
        const clock = setInterval(refreshCurrentTime, 1000);
        return function stopClock() {clearInterval(clock);}
    }, []);



    return (
    <header id="appHeader">
        <div id="logo">
            <img src={logo} alt="appLogo"/>
        </div>
        <div id="currentDate">
            <h1>{currentTime.toLocaleString('default', { month: 'long' }) + " " + currentTime.getDate() + " " + currentTime.toLocaleTimeString()}</h1>
            <div className="countdown--bar"/>
        </div>
    </header>);
}

export default Header;


//February 23, 2022 9:52PM