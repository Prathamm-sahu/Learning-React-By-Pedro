import { useState,useEffect } from "react";
import Axios from 'axios';

export default function Example() {

    const [name, setName] = useState("")
    const [predictedAge, setPredictedAge] = useState(null)
    const fetchData = () => {
        Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
            setPredictedAge(res.data)
            console.log(res.data)
        })
    }

    return (
        <div className="App">
            <input type="text" placeholder="Ex. Pratham..." onChange={(event) => setName(event.target.value)}/>
            <button onClick={fetchData}>Predict Age</button>
            <h1>Name: {predictedAge?.name}</h1>
            <h1>Predicted Age: {predictedAge?.age}</h1>
            <h1>Count: {predictedAge?.count}</h1>
        </div>
    )
}
