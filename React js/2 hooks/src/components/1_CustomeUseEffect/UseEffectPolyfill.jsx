import { useRef } from "react";

const useCustomUseEffect = (effect, deps) => {
  const isFirstRender = useRef(true);
  const prevDeps = useRef([]);

  //first render
  if (isFirstRender.current) {
    isFirstRender.current = false;
    const cleanup = effect();
    prevDeps.current = deps || [];
    return () => {
      if (cleanup && typeof cleanup === "function") {
        cleanup();
      }
    };
  }

  //dependency changes and no deps array
  const depsChanged = deps
    ? JSON.stringify(deps) !== JSON.stringify(prevDeps.current)
    : true;
  if (depsChanged) {
    const cleanup = effect();
    if (cleanup && typeof cleanup === "function") {
      cleanup();
    }
  }
  //cleanup
  prevDeps.current = deps || [];
};

export default useCustomUseEffect;
