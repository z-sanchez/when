import React from "react";

function AddCountdown() {
    return (
        <div id='addCountdown'>
            <input type="button" value="add"/>
            <form>
                <div id="dateEntry">
                    <label>Enter Date:
                        <input type="date" name="date_entry" id="enterDate"/>
                    </label>
                </div>
                <div className="countdownBoxFlex">
                    <div className="countdownBox">
                        <p>Year</p>
                        <h1>1</h1>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default AddCountdown;