import React, { useEffect } from "react";
import useFetchID from "../../hooks/FetchID";
import Products from "../products/products";

const Relatedproduct = ({ categoryid, productid }) => {
  useEffect(() => {
    console.log("Fetching related products with category ID:", categoryid, "and product ID:", productid);
  }, [categoryid, productid]);

  const { data, error, isLoading } = useFetchID(
    `/api/sales?populate=*&filters[id][$ne]=${productid}&filters[categories][id]=${categoryid}&pagination[start]=0&pagination[limit]=4`
  );

  console.log('Related Products Data:', data);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading related products.</div>;
  if (data?.data.length === 0) return <div>No related products found.</div>;

  return (
    <div className="related_product">
      <Products headingText="Related Products" products={data.data} />
    </div>
  );
};

export default Relatedproduct;
