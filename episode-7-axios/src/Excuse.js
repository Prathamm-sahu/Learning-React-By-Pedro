import { useState, useEffect } from "react";
import Axios from 'axios';

export default function Excuse() {
    const [generatedExcuse, setGeneratedExcuse] = useState("")
    const fetchData = (excu) => {
        Axios.get(`https://excuser.herokuapp.com/v1/excuse/${excu}`).then((res) => {
            console.log(res.data)
            setGeneratedExcuse(res.data[0].excuse)
        })
    }
    return (
        <div className="App">
            <h1>Generate An Excuse</h1>
            <button onClick={() => fetchData("party")}>Party</button>
            <button onClick={() => fetchData("family")}>Family</button>
            <button onClick={() => fetchData("office")}>Office</button>
            <p>{generatedExcuse}</p>
        </div>
    )
}