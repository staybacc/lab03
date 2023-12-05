import MyCounter from "./MyCounter";
export default function CounterList(){
    const CounterList = [{initial:5, min: -50, max: 50},
        {initial:5, min: -60, max: 60},
        {initial:5, min: -10, max: 100}];
    return CounterList.map(counter=> <MyCounter min = {counter.min} max = {counter.max}></MyCounter>)


}
