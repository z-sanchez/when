import React from "react";

class CountdownBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            on: true,
            value: '...',
        };
    }

    componentDidMount() {
        this.count = setInterval(() => {
            let result = null;
            let now = new Date().getTime();

            if (this.props.date > now) {

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
                    <p>{this.props.display}</p>
                    <h1>{this.state.value}</h1>
                </div>
                {this.renderSelect()}
            </div>
        );
    };
}

export default CountdownBox;