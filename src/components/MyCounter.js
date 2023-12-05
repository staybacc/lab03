import React, {useState} from "react";
import '../App.css';

export default function MyCounter(props) {

    const [counter, setCounter] = useState(0)

    const min = Number(props.min)
    const max = Number(props.max)

    const increase = ()=> {if (counter + 10 <max)setCounter(counter + 10)};
    const decrease = () => {if (counter - 10 > min)setCounter(counter - 10)};
    const reset = ()=> {setCounter(0)};
    return(
        <div id={"counter-first"}>
            <div id={"container"}>
                <div id={"current"}>Поточний рахунок: </div>
                <div id={"counter"}>{counter}</div>
                <button onClick={increase} id={"plus"}>+</button>
                <button onClick={decrease} id={"minus"}>-</button>
                <button onClick={reset} id={"reset"}>Reset</button>
            </div>
        </div>

    );
}