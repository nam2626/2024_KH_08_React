import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      return state;
  }
};

export default () => {
  const [count, dispatch] = useReducer(reducer, {value : 0});
  return (
    <>
      <h2>Counter</h2>
      <button>+</button>
      <button>-</button>
      <p>count : 0</p>
    </>
  );
}