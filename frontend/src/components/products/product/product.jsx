import './product.css';
import { useNavigate } from 'react-router-dom';

const Product = ({ id, data }) => {
  const navigate = useNavigate();
  return (
    <div className="card_main col">
      <div className="card shadow-sm" onClick={() => navigate(`/product/${id}`)}>
        <img
          src={`http://localhost:1337${data?.Product_image?.data?.attributes?.url}`}
          className="card-img-top product-img"
          alt="Thumbnail"
          width="100%"
          height="225px"
        />
        <div className="card-body">
          <p className="card-text product_name">{data?.Title}</p>
          <p className="card-text product_desciption">{data?.Description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="price text-primary">{data?.Price} RS</div>
            <small className="Discount_percentage text-decoration-line-through">{data?.Discount}</small>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Product;
