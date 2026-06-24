import { useReducer } from "react";

const reducer = (state, action) => {
  console.log(state, action);

  switch (action.type) {
    case "Increase":
      return state + 1;
    case "IncreaseByAmount":
      return state + action.payload;
    case "Decrease":
      return state - 1;
    case "Reset":
      return 0;
    default:
      throw new Error("Invalid action");
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, 0);

  const increaseHandler = () => {
    dispatch({ type: "Increase" });
  };

  const increaseByAmountHandler = () => {
    dispatch({ type: "IncreaseByAmount", payload: 10 });
  };

  const decreaseHandler = () => {
    dispatch({ type: "Decrease" });
  };

  const resetHandler = () => {
    dispatch({ type: "Reset" });
  };

  return (
    <>
      <h1>useReducer hook </h1>
      <p>{count}</p>
      <button onClick={increaseHandler}>increase</button>
      <button onClick={increaseByAmountHandler}>increase by amount</button>
      <button onClick={resetHandler}>reset</button>
      <button onClick={decreaseHandler}>decrease</button>
    </>
  );
}

export default App;
