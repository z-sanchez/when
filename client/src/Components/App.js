import React, {useState} from "react";
import "../Assets/Styles/boilerPlate.css";
import "../Assets/Styles/styles.css";
import header from "../Layouts/Header/index";
import AddCountdown from "./AddCountdown";
import Countdown from "./Countdown";

function App() {

    const [countdowns, setCountdowns] = useState([]);



    return (
        <div id="appGrid">
            {header}
            <AddCountdown/>
            <Countdown />
        </div>
    );
}

export default App;
