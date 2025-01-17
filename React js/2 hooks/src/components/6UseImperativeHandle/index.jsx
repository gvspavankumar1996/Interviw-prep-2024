import React, { useRef, useImperativeHandle, forwardRef } from "react";

const UseImperativeHandle = () => {
  const childRef = useRef(null);
  return (
    <div>
      <ChildComponent ref={childRef} />
      <button onClick={() => childRef.current()}>FFF</button>
    </div>
  );
};
// eslint-disable-next-line react/display-name
const ChildComponent = forwardRef((_props, ref) => {
  const inputRef = useRef(null);
  const focusInput = () => {
    inputRef.current.focus();
  };
  useImperativeHandle(ref, () => {
    return focusInput;
  });
  return (
    <div>
      <input ref={inputRef} type="text" />
    </div>
  );
});

export default UseImperativeHandle;
