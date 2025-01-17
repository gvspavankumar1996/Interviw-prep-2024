import React, { useEffect, useRef, useState } from "react";

const UseRefPractice = () => {
  const [count, setCount] = useState(0);
  const ref = useRef(0);
  const inputRef = useRef(null);
  console.log(inputRef, "inputRef hello ");
  //inputref.current will have complete element and we can access all its properties
  useEffect(() => {
   inputRef.current.focus()
  }, [])
  
  return (
    <div>
      <h1>ref count:{ref.current}</h1>
      <h1>state count:{count}</h1>
      <button style={{ marginRight: "12px" }} onClick={() => ref.current++}>
        increment ref
      </button>
      <button onClick={() => setCount(count + 1)}>increment state</button>

      <div>
        <input ref={inputRef} type="text" />
        {/* <button onClick={()=>inputRef.current.focus()}>setFocus</button> */}
      </div>
    </div>
  );
};

export default UseRefPractice;
