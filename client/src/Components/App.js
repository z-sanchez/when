import React from "react";
import "../Assets/Styles/boilerPlate.css";
import "../Assets/Styles/styles.css";
import Header from "../Layouts/Header/index";
import AddCountdown from "./AddCountdown";
import Countdown from "./Countdown";

class App extends React.Component {

    constructor(props) {
        super(props);

        this.addCountdown = this.addCountdown.bind(this);

        this.state = {
            countdowns: [{date: '2023-01-01T00:00', name: '2023'}],
        }
    }


    addCountdown(countdownObject) {
        let array = this.state.countdowns;

        //if entered date is in the past or is empty do nothing
        let now = new Date().getTime();
        let date = Date.parse(countdownObject.date);
        if (date < now || isNaN(date)) return;

        array.push(countdownObject);

        this.setState({
            countdowns: array,
        });

    }

    renderCountdowns = () => {
        return this.state.countdowns.map((countdown, index) => {
            return <Countdown  key={index} name={countdown.name} date={countdown.date}/>
        });
    }

    render() {
        return (
            <div id="appGrid">
                <Header/>
                <AddCountdown add={this.addCountdown}/>
                {this.renderCountdowns()}
            </div>
        );

    }

}

export default App;

