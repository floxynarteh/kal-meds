import React from "react";
// import bgImage from "./images/NEW_Product/1ca0881ce26a467e9590db7e7700156f.jpg";

function ProductItem({ image, name, price }) {
  return (
    <div className="productItem">
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <h1>{name}</h1>
      <p>GHC{price}</p>
    </div>
  );
}

export default ProductItem;
