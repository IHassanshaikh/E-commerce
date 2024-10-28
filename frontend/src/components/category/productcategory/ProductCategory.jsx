import React from "react";
import Products from "../../products/products";
import { useParams, NavLink } from "react-router-dom";
import useFetchID from "../../../hooks/FetchID";
import "./productcategory.css"

const ProductCategory = () => {
  const { id } = useParams();
  const endpoint = `/api/sales?populate=*&[filters][categories][id]=${id}`;
  const { data, error } = useFetchID(endpoint);

  if (error) {
    console.error("Error loading products:", error);
    return <div>Error loading products</div>;
  }

  if (!data) {
    console.log("Loading products...");
    return <div>Loading...</div>;
  }

  console.log("Fetched data:", data);

  return (
    <div className="product container-fluid mt-3">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb m-3">
          <li class="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            {data?.data?.[0]?.attributes?.categories?.data?.[0].attributes?.Title}
          </li>
        </ol>
      </nav>
      <div className="procut_title h1 m-1">
        {data?.data?.[0]?.attributes?.categories?.data?.[0].attributes?.Title}
      </div>
      <div className="product_container g-3 d-flex m-2"></div>
      <Products products={data.data} />
    </div>
  );
};

export default ProductCategory;
