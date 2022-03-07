import React from "react";

class CountdownBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '...',
        };
    }

    componentDidMount() {
        this.count = setInterval(() => {
            let result = null;
            let now = new Date().getTime();

            if (this.props.date > now) { //if entered date is in the future
                let countdown = this.props.date - now;

                switch (this.props.display) {
                    case 'year':
                        result = Math.floor(countdown / (1000 * 60 * 60 * 24 * 365));
                        break;
                    case 'day':
                        result = Math.floor((countdown % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
                        break;
                    case 'hour':
                        result = Math.floor((countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                        break;
                    case 'minute':
                        result = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60));
                        break;
                    case 'second':
                        result = Math.floor((countdown % (1000 * 60)) / (1000));
                        break;
                    default:
                        break;
                }
            }
            else result = 0;

            this.setState({
                value: result,
            })
            }
        , 1000);
    }

    componentWillUnmount() { //stop countdown on unmount
        clearInterval(this.count);
    }



    render() {
        return (
            <div className="countdownBox">
                <div className="countdownBox__count">
                    <p>{this.props.display}</p>
                    <h1>{this.state.value}</h1>
                </div>
            </div>
        );
    };
}

export default CountdownBox;