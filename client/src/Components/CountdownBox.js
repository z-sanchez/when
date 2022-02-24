import React from "react";

class CountdownBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            on: false,
            value: 0,
        };
    }

    componentDidMount() {
        this.count = setInterval(() => {
            let now = new Date().getTime();

            let then = new Date().setTime(this.props.date);

            let countdown = then - now;

            console.log("calculaton   " + then + " " + now);
            console.log("read from input  =  " + this.props.date )

            let result = Math.floor(countdown/(1000 * 60 * 60 * 24));

            this.setState({
                value: result,
            })
            }
        , 1000);
    }

    componentWillUnmount() {
        clearInterval(this.count);
    }

    toggleState = () => {
        this.setState({
            on: !this.state.on,
        });
    }


    renderSelect() {
        if (this.props.select) return (<div className="countdownBox__select"/>);
    }

    render() {
        let shading = "countdownBox";
        if (!this.state.on) shading = "countdownBox countdownBox--off";

        return (
            <div className={shading} onClick={this.toggleState}>
                <div className="countdownBox__count">
                    <p>Years</p>
                    <h1>{this.state.value}</h1>
                </div>
                {this.renderSelect()}
            </div>
        );
    };
}

export default CountdownBox;