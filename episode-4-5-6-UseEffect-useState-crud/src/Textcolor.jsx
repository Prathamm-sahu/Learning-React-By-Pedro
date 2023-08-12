import { useState } from "react";

export default function Textcolor() {
    const [textColor, setTextColor] = useState("black");
    const [bgColor, setBgColor] = useState("white");

    return (
        <div style={{ backgroundColor: bgColor }}>
            <h1 style={{ color: textColor }}>Hii I am Pratham</h1>
            <button onClick={() => {
                setTextColor(textColor === "black" ? "white" : "black");
                setBgColor(bgColor === "white" ? "black" : "white");
            }}>
                Change Color
            </button>
        </div>

    );
}