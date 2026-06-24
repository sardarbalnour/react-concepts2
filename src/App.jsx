import { useReducer } from "react";
import HttpReq from "./HttpReq";

const initialState = { count: 0, number: 26 };

const reducer = (state, action) => {
  console.log(state, action);

  switch (action.type) {
    case "Increase":
      return { ...state, count: state.count + 1 };
    case "IncreaseByAmount":
      return { ...state, count: state.count + action.payload };
    case "Decrease":
      return { ...state, count: state.count - 1 };
    case "UP":
      return { ...state, number: state.number + 15 };
    case "Reset":
      return { ...state, count: 0 };
    default:
      throw new Error("Invalid action");
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

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
      <HttpReq />
      {/* <h1>useReducer hook </h1>
      <p>{state.count}</p>
      <button onClick={increaseHandler}>increase</button>
      <button onClick={increaseByAmountHandler}>increase by amount</button>
      <button onClick={resetHandler}>reset</button>
      <button onClick={decreaseHandler}>decrease</button>
      <p>{state.number}</p>
      <button onClick={() => dispatch({ type: "UP" })}>UP number</button> */}
    </>
  );
}

export default App;
