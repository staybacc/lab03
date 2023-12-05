import React from "react";
import MyCounter from "./components/MyCounter";
import './App.css';
import CounterList from "./components/CounterList";
import ProductApp from "./components/ProductApp";
import Cart from "./components/Cart";
import FirstCounter from "./components/FirstCounter";
import "./styles/block-lab03.css"

function App() {
return(
    <div>
        <div className={"block-lab03"}>
            <FirstCounter></FirstCounter>
            <MyCounter></MyCounter>
            <CounterList></CounterList>
            <Cart></Cart>
            <ProductApp></ProductApp>
        </div>

</div>)




}
export default App;

//<MyCounter min = "-50" max = "50"></MyCounter>
//<CounterList></CounterList> <ProductList></ProductList> <Cart></Cart>