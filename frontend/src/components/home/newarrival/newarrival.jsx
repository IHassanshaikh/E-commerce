import iphone16 from "../../../assets/newarrival/iphone.png";
import headphone from "../../../assets/headphone.png"
import mobilewatch from '../../../assets/categoryimages/mobilewatch.png'
import "./newarrival.css";

const products = [
  {
    title: "I PHONE 16 PRO MAX",
    price: "$999.99",
    image: iphone16,
  },
  {
    title: "Iphone 16 12MP camera",
    price: "$999.99",
    image: headphone,
  },
  {
    title: "Iphone 16 12MP camera",
    price: "$999.99",
    image: mobilewatch,
  },
  {
    title: "Iphone 16 12MP camera",
    price: "$999.99",
    image: iphone16,
  },
];

const Arrival = () => {
  return (
      <div className="arrival container-fluid">
        <div className="h1 mt-4">New Arrivals</div>
        <div className="row arrival_content">
          <div className="arrival_main col-6 col-md-6 d-flex flex-column">
            <div className="arrival_title h3">{products[0].title}</div>
            <p className="arrival_price h3">Price: {products[0].price}</p>
            <button type="button" className="arrival_btn btn btn-primary">
              shop now
            </button>
            <img
              src={products[0].image}
              className="arrival_main_image img-fluid align-self-center"
              alt={products[0].title}
            />
          </div>
          <div className="arrival_card col-6 col-md-6 d-flex justify-content-center align-items-center">
            {products.slice(1).map((product, index) => (
              <div className="card_body d-flex" key={index}>
                <img className="arrival_card_img" src={product.image} alt="" />
                <div className="card_content align-self-center">
                  <div className="card_title">{product.title}</div>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <div className="arrival_price">{product.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default Arrival;
