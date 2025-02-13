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
// import ShoppingCart from "./components/11_ecommerceCart";
import TypeAhead from "./components/12_typeahead";
import InfiniteScrolling from "./components/13_infiniteScrolling";
import Carouselfeature from "./components/14_carousel";
import ThrottleScroll from "./components/15_throttle_scroll";
import "bootstrap/dist/css/bootstrap.min.css";
import AutoTypeahedComponent from "./components/16_NamDev_AutoTypeHead";
// import Counter from './components/Counter'

const App = () => {
  return (
    <div>
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
      {/* <TypeAhead /> */}
      {/* <InfiniteScrolling /> */}
      {/* <Carouselfeature /> */}

      {/* <ThrottleScroll /> */}
      <AutoTypeahedComponent />
    </div>
  );
};

export default App;
