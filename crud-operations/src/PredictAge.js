import React, { useEffect } from 'react';
import Axios from 'axios';


export const PredictAge = () => {

    const [predictedAge, setAge] = React.useState(null)
    const [name, setName] = React.useState("")

    const fetchAge = () => {
        Axios.get(`https://api.agify.io/?name=${name}`)
            .then((res) => {
                setAge(res.data)
            })
    }

    useEffect(() => {
        fetchAge()
    }, [])


    return (
        <div className="main">
            <input 
                type="text" 
                onChange={(event) => setName(event.target.value)} 
                placeholder="Ex. Pratham..."
                />
            <button onClick={fetchAge}>Predict Age</button>
            <h3>Name: {predictedAge?.name}</h3>     {/* ? means -> Only try to access object if its not null */}
            <h3>Predicted Age: {predictedAge?.age}</h3>
            <h3>Count: {predictedAge?.count}</h3>
        </div>
    )
}