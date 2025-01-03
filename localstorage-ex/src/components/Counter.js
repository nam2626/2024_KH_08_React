import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      state = { value: state.value + 1 };
      break;
    case "DECREMENT":
      state = { value: state.value - 1 };
      break;
  }
  // 로컬 스토리지에 변경된 내용 저장
  localStorage.setItem("count", JSON.stringify(state));
  return state;
};

export default () => {
  // 로컬 스토리지에 저장된 내용 읽어오기
  const data = localStorage.getItem("count") != null ? JSON.parse(localStorage.getItem("count")) : {value : 0};
  console.log(data);
  const [count, dispatch] = useReducer(reducer, data);
  return (
    <>
      <h2>Counter</h2>
      <button onClick={() => dispatch({type : 'INCREMENT'})}>+</button>
      <button onClick={() => dispatch({type : 'DECREMENT'})}>-</button>
      <p>count : {count.value}</p>
    </>
  );
}