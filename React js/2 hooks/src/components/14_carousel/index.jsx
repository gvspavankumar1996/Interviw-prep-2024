import React, { useEffect, useState } from "react";
import Carousel from "./carousel";

const Carouselfeature = () => {
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  console.log(images);
  const fetchImages = async (imgLimit) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://picsum.photos/v2/list?limit=${imgLimit}`
      );
      const data = await response.json();
      setImages(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchImages(8);
  }, []);

  return (
    <div className="carousel-container">
      <Carousel
        images={images}
        isLoading={loading}
        // imgPerSide={}
        imgPerLimit={4}
        //customNextButton={}
        //customPrevbutton={}
      />
    </div>
  );
};

export default Carouselfeature;
