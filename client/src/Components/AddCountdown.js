import React, {useState, useEffect} from "react";
import CountdownBox from "./CountdownBox";

function AddCountdown() {

    const [date, setDate] = useState(null)

    useEffect(() => {
        console.log('Side Effect' + date);
    })


    function toggleForm() {
        const form = document.getElementById('display');
        const button = document.getElementById('addButton');

        if (form.style.display === '') {
            form.style.display = 'block';
            button.value = "Done";
            button.classList.add('addButton--hover');
        }
        else {
            form.style.display = '';
            button.style.backgroundColor = "";
            button.value = "Add";
        }
    }

    function updateDate() {
        let date = document.getElementById('enterDate').value;
        setDate(date);
    }

    return (
        <div id='addCountdown'>
            <input type="button" value="Add" id="addButton" onClick={toggleForm}/>
            <span id="display">
            <form>
                <div id="dateEntry">
                    <label>Enter Date:
                    </label>
                    <input type="datetime-local" name="date_entry" id="enterDate" onChange={updateDate}/>
                </div>
                <div className="countdownBoxFlex">
                    <CountdownBox select={true} time={"year"} date={date}/>
                    <div className="countdownBox">
                        <div className="countdownBox__count">
                            <p>Months</p>
                            <h1>1</h1>
                        </div>
                        <div className="countdownBox__select"/>
                    </div>
                    <div className="countdownBox">
                        <div className="countdownBox__count">
                            <p>Days</p>
                            <h1>1</h1>
                        </div>
                        <div className="countdownBox__select"/>
                    </div>
                    <div className="countdownBox">
                        <div className="countdownBox__count">
                            <p>Hours</p>
                            <h1>1</h1>
                        </div>
                        <div className="countdownBox__select"/>
                    </div>
                    <div className="countdownBox">
                        <div className="countdownBox__count">
                            <p>Minutes</p>
                            <h1>1</h1>
                        </div>
                        <div className="countdownBox__select"/>
                    </div>
                    <div className="countdownBox">
                        <div className="countdownBox__count">
                            <p>Seconds</p>
                            <h1>1</h1>
                        </div>
                        <div className="countdownBox__select"/>
                    </div>
                </div>
            </form>
            </span>
        </div>
    );
}

export default AddCountdown;