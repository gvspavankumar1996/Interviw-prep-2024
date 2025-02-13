// import React from 'react'

import { useState, useEffect } from "react";
import useThrottle from "./useThrottle";

const ThrottleScroll = () => {
  const [top, setTop] = useState(0);
  const throttledValue = useThrottle(top, 1000);

  useEffect(() => {
    const handleScroll = () => {
      setTop(window.scrollY);
    };
    document.addEventListener("scroll", handleScroll);

    return () => removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ height: "1000rem" }}>
      <div style={{ position: "fixed", top: 0 }}>
        <h2>Normal : {top}</h2>
        <h2>ThrottledValue : {throttledValue}</h2>
      </div>
    </div>
  );
};

export default ThrottleScroll;
