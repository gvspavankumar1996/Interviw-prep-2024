import { useEffect, useState } from "react";
import useCustomEffect from "./UseEffectPolyfill";

function Counter() {
  const [count, setCount] = useState(0);

  useCustomEffect(() => {
    console.log("once:", count);
    return () => {
      console.log("cleanup once");
    };
  }, []);
  useCustomEffect(() => {
    console.log("dependency:", count);
    return () => {
      console.log("cleanup dependency");
    };
  }, [count]);

  //   console.log("rerendered");

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
