import React from "react";
import '../products/product/product.css'
import Product from "./product/product";

const Products = ({ products }) => {
  return (
    <div className="product container-fluid mt-5">
      {/* <div className="h1 mt-5 mb-4">Products</div> */}
      <div className="product_container row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mt-4 d-flex">
        {products?.map((item) => (
          <Product key={item.id} id={item.id} data={item.attributes} />
        ))}
      </div>
    </div>
  );
};


export default Products;
