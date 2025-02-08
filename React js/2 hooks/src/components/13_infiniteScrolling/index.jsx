import React, { useEffect, useState } from "react";
import "./index.css";
import Post from "./post";

const InfiniteScrolling = () => {
  const [data, setData] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    fetch(`https://picsum.photos/v2/list?page=${pageNo}&limit=3`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setLoading(false)
        setData((prev) => [...prev, ...data]);
      }).catch((err)=>{
        setLoading(false)
      })
  }, [pageNo]);

  return <Post loading={loading} data={data} setPageNo={setPageNo} />;
};

export default InfiniteScrolling;
