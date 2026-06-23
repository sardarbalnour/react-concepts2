import { useReducer } from "react";

const reducer = (state, action) => {
  console.log(state, action);

  switch (action) {
    case "Increase":
      return state + 1;
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
    // setCount((count) => count + 1);
    dispatch("Increase");
  };

  const decreaseHandler = () => {
    // if (count < 1) return;
    // setCount((count) => count - 1);
    dispatch("Decrease");
  };

  const resetHandler = () => {
    // setCount(0);
    dispatch("Reset");
  };

  return (
    <>
      <h1>useReduce hook </h1>
      <p>{count}</p>
      <button onClick={increaseHandler}>increase</button>
      <button onClick={resetHandler}>reset</button>
      <button onClick={decreaseHandler}>decrease</button>
    </>
  );
}

export default App;
