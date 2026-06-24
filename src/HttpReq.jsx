import { useReducer, useEffect } from "react";

const initialState = {
  isLoading: true,
  data: [],
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SUCCESS":
      return { isLoading: false, data: action.payload, error: "" };
    case "FAILED":
      return { isLoading: false, data: [], error: action.payload };
    default:
      throw new Error("Invalid action");
  }
};

function HttpReq() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((json) => dispatch({ type: "SUCCESS", payload: json }))
      .catch((error) => dispatch({ type: "FAILED", payload: error.message }));
  }, []);

  return (
    <div>
      {state.isLoading && <p>Loading...</p>}
      <div>
        {!!state.data &&
          state.data.map((post) => <p key={post.id}>{post.title}</p>)}
      </div>
      {!!state.error && <p>{state.error}</p>}
    </div>
  );
}

export default HttpReq;
