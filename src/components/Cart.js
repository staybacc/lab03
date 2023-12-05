import {useEffect, useState} from "react";
import FirstCounter from "./FirstCounter";
import "../styles/cart.css"

export default function Cart(){
const listOfItems = [
    {id:1, name:"Constructor LEGO", price:300},
    {id:2, name:"Train Station", price:200},
    {id:3, name:"Hot Wheels Track", price:300}
]

    const [totals, setTotals] = useState({});

    const countTotal = (itemId, count) => {
        setTotals((prevTotals) => ({
            ...prevTotals,
            [itemId]: count * listOfItems.find((item) => item.id === itemId).price,
        }));
    }

    const totalOfAllGoods = Object.values(totals).reduce((a, b) => a + b, 0);

    return(
        <div>
            <div className={"cart"}>
        <h1>Cart</h1>
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
            </tr>
            </thead>
            <tbody>
            {listOfItems.map((item) => (
                <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td><FirstCounter itemId={item.id} countTotal={countTotal}/></td>
                    <td>{totals[item.id] || 0}</td>
                </tr>
            ))}

            </tbody>
            <tfoot>
            <tr>
                <th colSpan={2}>Totals</th>
                <td colSpan={2}>{totalOfAllGoods}</td>
            </tr>
            </tfoot>
        </table>
        </div>
        </div>
    )
}