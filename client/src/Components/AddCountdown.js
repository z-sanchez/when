import React from "react";

function AddCountdown() {
    return (
        <div id='addCountdown'>
            <input type="button" value="Add"/>
            <form>
                <div id="dateEntry">
                    <label>Enter Date:
                        <input type="datetime-local" name="date_entry" id="enterDate"/>
                    </label>
                </div>
                <div className="countdownBoxFlex">
                    <div className="countdownBox">
                        <div className="countdownBox__count">
                            <p>Year</p>
                            <h1>1</h1>
                        </div>
                        <div className="countdownBox__select"/>
                    </div>
                    <div className="countdownBox">
                        <div className="countdownBox__count">
                            <p>Year</p>
                            <h1>1</h1>
                        </div>
                        <div className="countdownBox__select"/>
                    </div>
                    <div className="countdownBox">
                        <div className="countdownBox__count">
                            <p>Year</p>
                            <h1>1</h1>
                        </div>
                        <div className="countdownBox__select"/>
                    </div>
                    <div className="countdownBox">
                        <div className="countdownBox__count">
                            <p>Year</p>
                            <h1>1</h1>
                        </div>
                        <div className="countdownBox__select"/>
                    </div>
                    <div className="countdownBox">
                        <div className="countdownBox__count">
                            <p>Year</p>
                            <h1>1</h1>
                        </div>
                        <div className="countdownBox__select"/>
                    </div>
                    <div className="countdownBox">
                        <div className="countdownBox__count">
                            <p>Year</p>
                            <h1>1</h1>
                        </div>
                        <div className="countdownBox__select"/>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default AddCountdown;