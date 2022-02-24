import React from "react";
import "../Assets/Styles/App.css";
import header from "../Layouts/Header/index";
import AddCountdown from "./AddCountdown";
import Countdown from "./Countdown";

function App() {
    return (
        <div id="appGrid">
            {header}
            <AddCountdown/>
            <Countdown />
        </div>
    );
}

export default App;
