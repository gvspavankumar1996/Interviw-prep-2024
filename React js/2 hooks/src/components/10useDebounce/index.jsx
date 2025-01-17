import { useEffect, useState } from "react";
import useDebounce from "./use-debounce";

const DebouncedInput = () => {
  const [inputText, setInputText] = useState("");
  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };
  const debouncedSearchTerm = useDebounce(inputText, 500); // Debounce with a 500ms delay

  // Trigger a side effect when the debounced value changes
  useEffect(() => {
    if (debouncedSearchTerm) {
      console.log("Fetching data for:", debouncedSearchTerm);
      // Simulate API call or perform search
    }
  }, [debouncedSearchTerm]);

  return (
    <div>
      <p>{inputText}</p>
      <input
        type="text"
        value={inputText}
        placeholder="Type Something….."
        onChange={handleInputChange}
      />
    </div>
  );
};

export default DebouncedInput;
