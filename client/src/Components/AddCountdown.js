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
        setDate(Date.parse(date));
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
                    <CountdownBox select={true} display={"year"} date={date}/>
                    <CountdownBox select={true} display={"day"} date={date}/>
                    <CountdownBox select={true} display={"hour"} date={date}/>
                    <CountdownBox select={true} display={"minute"} date={date}/>
                    <CountdownBox select={true} display={"second"} date={date}/>
                </div>
            </form>
            </span>
        </div>
    );
}

export default AddCountdown;