import React, { useReducer } from "react";

const Usereducer = () => {
  const countReducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return {
          ...state,
          count: state.count + action.payload,
        };
      case "DECREMENT":
        return {
          ...state,
          count: state.count - action.payload,
        };
      default:
        return state;
    }
  };
  const initialCount = {
    count: 0,
  };
  const [state, dispatch] = useReducer(countReducer, initialCount);
  return (
    <div>
      <h1>
        count: <p>{state.count}</p>
      </h1>
      <button onClick={() => dispatch({ type: "INCREMENT", payload: 2 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT", payload: 2 })}>
        Decrement
      </button>
    </div>
  );
};

export default Usereducer;
