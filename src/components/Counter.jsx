import { useEffect } from "react";

function Counter() {
  useEffect(() => {
    // something happend

    return () => {
      console.log("cleaned");
    }; //cleanup function
  }, []);
  return <div>Counter</div>;
}

export default Counter;
