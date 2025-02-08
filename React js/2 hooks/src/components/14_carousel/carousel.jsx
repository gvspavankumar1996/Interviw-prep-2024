import React from "react";

const Carousel = ({
  images = [],
  isLoading = false,
  imgPerSide,
  imgPerLimit = images.length,
  customNextButton,
  customPrevbutton,
}) => {
  console.log(images, "ccc");
  if (isLoading) {
    return <div>Loading....</div>;
  }
  return (
    <div className="carousel">
      <div className="img-container">
        {images
          ?.slice(
            0,
            imgPerLimit > images?.length ? images?.length : imgPerLimit
          )
          ?.map((image) => {
            return (
              <img
                key={image?.id}
                src={image?.download_url}
                alt={image?.author}
                className="image"
              />
            );
          })}
      </div>
    </div>
  );
};

export default Carousel;
