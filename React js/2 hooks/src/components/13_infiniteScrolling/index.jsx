import React, { useEffect, useState } from "react";
import "./index.css";
import Post from "./post";

const InfiniteScrolling = () => {
  const [data, setData] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  useEffect(() => {
    fetch(`https://picsum.photos/v2/list?page=${pageNo}&limit=3`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData((prev) => [...prev, ...data]);
      });
  }, [pageNo]);

  return <Post data={data} setPageNo={setPageNo} />;
};

export default InfiniteScrolling;
