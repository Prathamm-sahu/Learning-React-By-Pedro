import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    function increaseCount() {
        setCount(count + 1);
    }
    function descreaseCount() {
        setCount(count - 1);
    }
    return (
        <div>
            <h1><button onClick={increaseCount}>+</button></h1>
            <h1><button onClick={descreaseCount}>-</button></h1>
            <h1><button onClick={() => {setCount(0)}}>set to zero</button></h1>

            <h1>{count}</h1>
        </div>
    );
}

export default Counter;