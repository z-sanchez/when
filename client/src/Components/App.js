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
            countdowns: [{date: '2023-04-14T00:00', name: 'Z & C Wedding'}],
        }
    }


    addCountdown(countdownObject) {
        let array = this.state.countdowns;
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
        console.log(this.state.countdowns);
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

