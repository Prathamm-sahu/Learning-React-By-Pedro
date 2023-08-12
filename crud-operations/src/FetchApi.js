import React, { useEffect } from 'react';
import Axios from 'axios'
import './App.css';
export default function FetchApi() {
    const [catfact, setCatFact] = React.useState("")

    // fetch("https://catfact.ninja/fact")
    //     .then((response) => response.json())
    //     .then((data) => {
    //         console.log(data)
    // });

    const fetchCatFact = () => {
        Axios.get("https://catfact.ninja/fact")
        .then((res) => {
            setCatFact(res.data.fact)
        })
    }

    useEffect(() => {
        fetchCatFact()
    }, [])

    

    return (
        <div className="Mai">
            <button onClick={fetchCatFact}>Generate Cat Facts</button>
            <p>{catfact}</p>
        </div>
    )
}