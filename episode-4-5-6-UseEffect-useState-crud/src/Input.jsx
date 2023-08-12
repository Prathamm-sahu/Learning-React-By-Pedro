import './App.css';
import { useState } from 'react';

export default function Input() {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (event) => {
        setInputValue(event.target.value)
    }
    return (
        <div>
            <input type="text" onChange={handleInputChange} />
            {inputValue}
        </div>
    )
}