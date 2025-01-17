import React from "react";
import useWindowSizeHook from "./use-windowsize";

const UseWindowSizeCOmponent = () => {
  const { height, width } = useWindowSizeHook();
  console.log(height, width);
  return (
    <div>
      <p>width:{width}</p>
      <p>height:{height}</p>
    </div>
  );
};

export default UseWindowSizeCOmponent;
