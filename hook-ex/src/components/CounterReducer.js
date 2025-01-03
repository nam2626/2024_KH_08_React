import React, { useState } from 'react';
export default function CounterReducer() {
    const [count, setCount] = useState(0);

    const addCount = () => setCount(count + 1);
    const minusCount = () => setCount(count - 1);

    return (
        <div>
            <h2>useReducer 테스트</h2>
            <p>count : {count}</p>
            <button onClick={addCount}>+</button>
            <button onClick={minusCount}>-</button>
        </div>
    );
}