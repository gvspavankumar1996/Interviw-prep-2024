import { useState, useEffect, useRef } from "react";

function useThrottle(value, delay = 1000) {
  const [throttledValue, setThrottledValue] = useState(value);
  const flagRef = useRef(true);
  useEffect(() => {
    if (flagRef.current) {
      setThrottledValue(value);
      flagRef.current = false;

      setTimeout(() => {
        flagRef.current = true;
      }, delay);
    }
  }, [value, delay]);

  return throttledValue;
}

export default useThrottle;
