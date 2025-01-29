import React, { useEffect } from "react";

const Post = ({ data, setPageNo }) => {
  useEffect(() => {
    const observer = new IntersectionObserver((param) => {
      console.log(param);
      if (param[0]?.isIntersecting) {
        observer.unobserve(lastImage);
        setPageNo((prev) => prev + 1);
      }
    });
    const lastImage = document.querySelector(".img-post:last-child");
    if (!lastImage) {
      return;
    }
    observer.observe(lastImage);
  }, [data, setPageNo]);
  return (
    <div className="img-container">
      {data?.map((image) => {
        return (
          <img className="img-post" key={image?.id} src={image?.download_url} />
        );
      })}
    </div>
  );
};

export default Post;
