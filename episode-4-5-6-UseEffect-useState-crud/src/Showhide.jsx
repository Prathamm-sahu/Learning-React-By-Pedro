import './App.css';
import { useState } from 'react';

export default function Showhide() {
    const [showText, setShowText] = useState(true);

    return (
        <div>
            <button onClick={() => {
                setShowText(!showText)  
            }}>Show/Hide</button>
            {showText && <h1>Hi My name is Pedro</h1> }
        </div>
    );

}