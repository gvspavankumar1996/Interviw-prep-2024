import React, { useEffect, useState } from "react";
import "./index.css";

const ProductCard = ({ image, title }) => {
  return (
    <div className="product-card">
      <div className="img-cointainer">
        <img src={image} alt={title} className="prod-img" />
      </div>

      <span>{title}</span>
    </div>
  );
};

const Pagination = () => {
  const [products, setProducts] = useState(null);

  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=500");
    const json = await data.json();
    console.log(json);
    setProducts(json?.products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Pagination</h1>
      <div className="products-container">
        {products &&
          products.map((p) => {
            return (
              <ProductCard key={p.id} image={p.thumbnail} title={p.title} />
            );
          })}
      </div>
    </div>
  );
};

export default Pagination;
