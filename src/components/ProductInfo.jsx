import React from "react";

const ProductInfo = () => {
  const product = {
    name: "laptop",
    price: "$1200",
    availability: "In stock",
  };

  return (
    <div>
      <p>Product Name--{product.name}</p>
      <p>Product Price--{product.price}</p>
      <p>Product Availability--{product.availability}</p>
    </div>
  );
};

export default ProductInfo;
