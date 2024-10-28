import React, { useState, useContext, useEffect } from "react";
import "./singleproduct.css";
import useFetchID from "../../hooks/FetchID";
import { useParams } from "react-router-dom";
import { Context } from "../../utilities/context";
import Relatedproduct from "../allproduct/relateddata";
import ProductCategory from "../category/productcategory/ProductCategory";
import Category from "../category/category";

const Singleproduct = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useFetchID(
    `/api/sales?populate=*&filters[id][$eq]=${id}`
  );
  const products = data?.data?.[0]?.attributes;

  const [quantity, setQuantity] = useState(1);
  const { addToCart, message } = useContext(Context);

  useEffect(() => {
    if (data) {
      console.log("Product data:", data);
    }
  }, [data]);

  if (!id) {
    return <div>Product ID is undefined</div>;
  }

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading product.</div>;

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart(
      { id: data.data[0].id, name: products.Title, price: products.Price },
      quantity
    );
  };

  return (
    <div className="Product">
      {message && <div className="alert alert-success">{message}</div>}
      <div className="Product_main row">
        <div className="col-6">
          <img
            className="Product_image"
            src={`http://localhost:1337${products?.Product_image?.data?.attributes?.url}`}
            alt="Product"
          />
        </div>
        <div className="Product_content col-6">
          <div className="p Product_title">{products?.Title}</div>
          <div className="p Product_price">RS {products?.Price}</div>
          <div className="p Product_quantity product_category mt-2">
            Category:{" "}
            {
              data?.data?.[0]?.attributes?.categories?.data?.[0].attributes
                ?.Title
            }
          </div>
          <div className="p Product_quantity">
            Quantity:
            <a
              className="add p font-weight-bold text-decoration-none border  p-2"
              href="#"
              onClick={handleIncreaseQuantity}
            >
              +
            </a>
            <span className="counter">{quantity}</span>
            <a
              className="substract p font-weight-bold text-decoration-none border p-2"
              href="#"
              onClick={handleDecreaseQuantity}
            >
              -
            </a>
          </div>
          <div className="Product_button d-flex">
            <button
              className="cart_button btn btn-primary me-2"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
            <button className="buy_button btn btn-primary">Buy Now</button>
          </div>
          
        </div>
        <div className="row">
          <div className="col-12">
            <div className="p Product_description">{products?.Description}</div>
          </div>
        </div>
        <Relatedproduct
          categoryid={products?.categories?.data?.[0]?.id}
          productid={id}
        />
      </div>
      <div className="warranty-info">
        <p>
          Thank you for purchasing our product. We stand behind the quality of
          our products and offer a comprehensive warranty to ensure your
          satisfaction. Please review the warranty details below:
        </p>

        <ul>
          <li>
            <strong>Warranty Duration:</strong> Our standard warranty is valid
            for 2 years from the date of purchase. This warranty covers defects
            in materials and workmanship, ensuring that the product meets the
            highest quality standards.
          </li>

          <li>
            <strong>Covers:</strong> The warranty covers repairs or replacements
            necessary due to defects in materials or workmanship. If the product
            malfunctions or fails within the warranty period under normal use,
            we will repair or replace it free of charge.
          </li>

          <li>
            <strong>Exclusions:</strong> This warranty does not cover damages
            resulting from misuse, accidents, unauthorized repairs,
            modifications, or normal wear and tear. Please ensure proper use and
            care of the product to avoid any potential issues.
          </li>

          <li>
            <strong>To Claim Warranty:</strong> If you believe your product
            qualifies for a warranty claim, follow these steps:
            <ul>
              <li>
                Contact our customer support team with your purchase receipt and
                a detailed description of the issue.
              </li>
              <li>
                Our customer support team can be reached via:
                <ul>
                  <li>
                    <strong>Phone:</strong> 1-800-123-4567
                  </li>
                  <li>
                    <strong>Email:</strong>{" "}
                    <a href="mailto:support@example.com">support@example.com</a>
                  </li>
                  <li>
                    <strong>Online Claim Form:</strong> Submit a claim through
                    our <a href="/warranty-claim">warranty claim form</a>.
                  </li>
                </ul>
              </li>
              <li>
                Upon receipt of your claim, we will review the information and
                provide instructions for returning the product if necessary.
              </li>
            </ul>
          </li>

          <li>
            <strong>Support Center:</strong> For additional assistance, visit
            our <a href="/support">Support Center</a>. Our support team is
            available Monday to Friday, from 9 AM to 6 PM, to help with any
            questions or concerns you may have.
          </li>
        </ul>

        <p>
          We appreciate your trust in our products and are committed to
          providing you with the best customer service. If you have any further
          questions about our warranty policy, please do not hesitate to reach
          out.
        </p>
      </div>
    </div>
  );
};

export default Singleproduct;
