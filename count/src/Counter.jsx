import { useState } from "react";

function Counter({ start }) {
//function Counter() {
    const [count, setCount] = useState(start);
    //const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleClick}>
                Zvýšit počet
            </button>
        </div>
    );
}

export default Counter;