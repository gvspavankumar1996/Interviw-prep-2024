import { useEffect, useState } from "react";
import "./index.css";

const AutoTypeahedComponent = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [cache, setCache] = useState({});

  const fetchData = async () => {
    if (cache[input]) {
      setResults(cache[input]);
      return;
    }
    const data = await fetch(`https://dummyjson.com/recipes/search?q=${input}`);
    const response = await data.json();
    console.log(response);
    setResults(response?.recipes);
    setCache({ ...cache, [input]: response?.recipes });
  };
  console.log(results);
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchData();
    }, 300);
    return () => clearTimeout(timer);
  }, [input]);

  return (
    <div className="App">
      <h1>AutoTypeahedComponent</h1>

      <div>
        <input
          type="text"
          className="search-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onFocus={() => setShowResults(true)}
          onBlur={() => setShowResults(false)}
        />
      </div>

      {showResults && (
        <div className="result-container">
          {results &&
            results?.map((res) => {
              return (
                <span className="result" key={res?.id}>
                  {res?.name}
                </span>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default AutoTypeahedComponent;
