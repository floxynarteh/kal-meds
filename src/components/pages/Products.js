import React from "react";
import { ProductList } from "../ProductList";
import ProductItem from "../ProductItem";
import "../css/Products.css";

function Products() {
  return (
    <div className="product">
      <div className="productTitle"> Product List </div>
      <div className="productList">
        {ProductList.map((productList, key) => {
          return (
            <ProductItem
              key={key}
              image={productList.image}
              name={productList.name}
              price={productList.price}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Products;
