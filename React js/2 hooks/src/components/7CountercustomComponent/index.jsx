import React from "react";
import useCounter from "./use-counter";

const Counter = () => {
  const { count, increment, decrement, reset } = useCounter(1, 2);
  return (
    <div>
      <p>Count:{count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;
