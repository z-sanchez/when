import React, {useState} from "react";
import CountdownBox from "./CountdownBox";

const AddCountdown = (props) => {

    const [date, setDate] = useState(null);


    const toggleForm = () => {
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
            let countdownObject = {
                date: document.getElementById('enterDate').value,
                name: document.getElementById('enterName').value,
            }
            props.add(countdownObject);
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
                    <label>Enter Name:
                    </label>
                    <input id="enterName" type="text"/>
                </div>
                <div className="countdownBoxFlex">
                    <CountdownBox display={"year"} date={date}/>
                    <CountdownBox display={"day"} date={date}/>
                    <CountdownBox display={"hour"} date={date}/>
                    <CountdownBox display={"minute"} date={date}/>
                    <CountdownBox display={"second"} date={date}/>
                </div>
            </form>
            </span>
        </div>
    );
}

export default AddCountdown;