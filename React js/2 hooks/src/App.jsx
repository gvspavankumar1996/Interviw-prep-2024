import React from "react";
// import Counter from "./components/1_CustomeUseEffect/Counter";
import UseRef from "./components/2_Userefhook";
import UseContextHook from "./components/3_useContext";
import DarkLightMachineCoding from "./components/4_darkLightMachineCoding";
import "./App.css";
import Usereducer from "./components/5_usereducer";
import UseImperativeHandle from "./components/6UseImperativeHandle";
import Counter from "./components/7CountercustomComponent";
import UseWindowSizeComponent from "./components/8UseWindowSize";
import UseFetchComponent from "./components/9useFetch";
import ShoppingCart from "./components/11_ecommerceCart";
import TypeAhead from "./components/12_typeahead";
// import Counter from './components/Counter'

const App = () => {
  return (
    <div className="container">
      <div className="hello">
        {/* useEffect polyfill */}
        {/* <Counter/> */}

        {/* {use ref} */}
        {/* <UseRef/> */}
        {/* {use context} */}
        {/* <UseContextHook/> */}

        {/* dark light machine coding */}
        {/* <DarkLightMachineCoding/> */}

        {/* usereducer */}
        {/* <Usereducer /> */}
        {/* UseImperativeHandle */}
        {/* <UseImperativeHandle /> */}

        {/* <Counter/> */}
        {/* <UseWindowSizeComponent/> */}
        {/* <UseFetchComponent/> */}

        {/* <ShoppingCart /> */}
        <TypeAhead />
      </div>
    </div>
  );
};

export default App;
