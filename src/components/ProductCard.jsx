import React from "react";

const ProductCard = ({ product }) => {
  const { brand, description } = product;
  return (
    <div className="w-[250px] border border-gray-600 rounded-lg m-3 p-2 shadow-gray-500 ">
      <img src={product.images[0]} alt={brand} className="w-full h-56" />
      <p className="text-md font-semibold text-white">{brand}</p>
      <p className="text-sm text-slate-300">{description}</p>
    </div>
  );
};

export default ProductCard;
