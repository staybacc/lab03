import {useEffect, useState} from "react";


export default function RegisterForm(){

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")



    return(
        <div className={"container"}>
            <input onChange= {(e) =>{setUsername(e.target.value)}} type={"text"} placeholder={"Enter your username"}/>
            <input onChange= {(e) =>{setPassword(e.target.value)}} type={"text"} placeholder={"Enter your password"}/>
            <button onClick={() => {
                const query = "http://localhost:8080/registerResponse?username=" +username +"&password=" +password
                fetch(query).then(data =>
                data.json()).then(data => {console.log(data)})
            }
            }>Register</button>

        </div>
    )


}