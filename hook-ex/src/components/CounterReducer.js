import React, { useReducer, useState } from 'react';
function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return { value : state.value + 1 };
        case 'DECREMENT':
            return { value : state.value - 1 };
        default:
            return state;
    }
}
export default function CounterReducer() {
    const [count, dispatch] = useReducer(reducer, {value : 0});

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