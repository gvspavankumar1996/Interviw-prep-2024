import { useState, useEffect } from "react";

const useDebounce = (value, delay) => {
  // State to store the debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Set up a timer to update the debounced value after the delay
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cleanup function to clear the timeout if the value changes before the delay is over
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]); // Re-run the effect when value or delay changes

  return debouncedValue; // Return the debounced value
};

export default useDebounce;
