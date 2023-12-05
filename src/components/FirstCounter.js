import React, {useState} from "react";
import '../App.css';

export default function FirstCounter({itemId, countTotal}) {

    const [counter, setCounter] = useState(0)


    const increase = ()=> {
        setCounter(counter+1);
        countTotal(itemId, counter+1);};
    const decrease = () => {
        setCounter(counter-1);
        countTotal(itemId, counter-1);};
    return(
        <div id={"counter-second"}>
            <div id={"container"}>
                <div id={"counter"}>{counter}</div>
                <button onClick={increase} id={"plus"}>+</button>
                <button onClick={decrease} id={"minus"}>-</button>
            </div>
        </div>

    );
}