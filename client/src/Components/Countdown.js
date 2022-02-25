import React from "react";
import CountdownBox from "./CountdownBox";

const Countdown = (props) => {

    let date = Date.parse(props.date);

    return (
        <div id="countdownFlex">
            <div className="countdown">
                <h1>{props.name}</h1>
                <div className="countdown--bar"/>
                <div className="countdownBoxFlex">
                    <CountdownBox select={false} display={"year"} date={date}/>
                    <CountdownBox select={false} display={"day"} date={date}/>
                    <CountdownBox select={false} display={"hour"} date={date}/>
                    <CountdownBox select={false} display={"minute"} date={date}/>
                    <CountdownBox select={false} display={"second"} date={date}/>
                </div>
            </div>
        </div>);
}


export default Countdown;