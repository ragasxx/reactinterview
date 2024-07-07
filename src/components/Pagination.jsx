import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Pagination = () => {
  const LIMIT = 10;

  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetchProducts();
  }, [currentPage]);

  const fetchProducts = async () => {
    const res = await fetch(
      `https://dummyjson.com/products?limit=${LIMIT}&skip=${
        currentPage * LIMIT - LIMIT
      }`
    );
    const json = await res.json();
    setProducts(json.products);
    setTotalPages(Math.trunc(json.total / LIMIT));
  };

  console.log(currentPage);

  return (
    <div className="w-full bg-gradient-to-b from-black to-gray-900 min-h-screen flex flex-col justify-center items-center">
      <div className="flex flex-wrap mx-auto">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="flex justify-center items-center w-full">
        <div className="flex w-[70%] justify-between h-20 p-6 text-xl text-slate-200 cursor-pointer">
          <span
            className={currentPage <= 1 ? "hidden" : "block"}
            onClick={() => setCurrentPage((currentPage) => currentPage - 1)}
          >
            ⏮️
          </span>
          {[...Array(totalPages).keys()].map((i) => (
            <span
              key={i}
              className={i + 1 === currentPage && "font-bold underline"}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </span>
          ))}
          <span
            onClick={() => setCurrentPage((currentPage) => currentPage + 1)}
            className={currentPage >= totalPages && "hidden"}
          >
            ⏭️
          </span>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
