import React, { useEffect, useState } from "react";
import "./index.css";


const STATE={
    LOADING:"LOADING",
    ERROR:"ERROR",
    SUCCESS:"SUCCESS",
}
const TypeAhead = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [status, setStatus] = useState(STATE.LOADING);
  // 'https://dummyjson.com/products/search?q=bat&limit=10'
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://dummyjson.com/products/search?q=${query}&limit=10`
      );
      const json = await res.json();
      setData(json.products);
      console.log(json.products);
    };
    fetchData();
  }, [query]);

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
      />
      {status= STATE.SUCCESS}
      <ul>
        {data && data?.length>0 && data.map((product)=>{
            return <li key={product.id}>{product.title}</li>
        })}
      </ul>
    </div>
  );
};

export default TypeAhead;
