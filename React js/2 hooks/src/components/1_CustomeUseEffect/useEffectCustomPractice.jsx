import { useRef } from "react";

const useCustomUseEffectPractice = (effect, deps) => {
  const isFirstRender = useRef(true);
  const prevDeps = useRef([]);
// console.log(isFirstRender)
  //first render
  if (isFirstRender.current) {
      isFirstRender.current = false;
    effect();
  }

  // deps change || no dependency
  let isDepsChanged = deps
    ? JSON.stringify(deps) !== JSON.stringify(prevDeps.current)
    : true;

  if (isDepsChanged) {
    effect();
  }

  // cleanup
};

export default useCustomUseEffectPractice;
