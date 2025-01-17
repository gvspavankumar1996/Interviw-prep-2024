import React, { createContext } from "react";
import { useContext } from "react";

const ThemeContext = createContext("light");
const ThemeContext2 = createContext("dark");
const UseContextHook = () => {
    console.log(ThemeContext)
  return (
    <div>
      <ThemeContext.Provider value={"light"}>
      <ThemeContext2.Provider value={"dark"}>
        <A />
      </ThemeContext2.Provider>
      </ThemeContext.Provider>
    </div>
  );
};
const A = () => {
  return (
    <div>
      <B />
    </div>
  );
};
const B = () => {
  return (
    <div>
      <C />
    </div>
  );
};
const C = () => {
  const context1 = useContext(ThemeContext);
  const context2 = useContext(ThemeContext2);
  return <div>UseContextHook :{context1} -{context2} </div>;
};

export default UseContextHook;
