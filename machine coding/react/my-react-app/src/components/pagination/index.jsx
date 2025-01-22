import React, { useEffect, useState } from "react";
import "./index.css";

const Pagination = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(2);
  const fetchProducts = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=100");
    const json = await res.json();
    setProducts(json?.products || []);
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  const selectPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= products.length / 10 &&
      selectedPage !== page
    ) {
      setPage(selectedPage);
    }
  };

  return (
    <div>
      {products?.length > 0 && (
        <div className="products">
          {products.slice(page * 10 - 10, page * 10).map((prod) => {
            return (
              <span className="products__single" key={prod.id}>
                <img src={prod.thumbnail} alt={prod.title} />
                <span>{prod.title}</span>
              </span>
            );
          })}
        </div>
      )}

      {products?.length > 0 && (
        <div className="pagination">
          <span onClick={() => selectPageHandler(page - 1)}>⬅️</span>
          {[...Array(products.length / 10)].map((_, i) => {
            return (
              <span
                className={page === i + 1 ? "products__selected" : ""}
                onClick={() => selectPageHandler(i + 1)}
                key={i}
              >
                {i}
              </span>
            );
          })}
          <span onClick={() => selectPageHandler(page + 1)}>▶️</span>
        </div>
      )}
    </div>
  );
};

export default Pagination;
