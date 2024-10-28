import './discount.css'
import laptop from '../../../assets/categoryimages/laptop.png'
import discount from '../../../assets/discount/discount.png'
const Discount = () => {
  return (
          <div className="Discount_banner d-flex align-items-center">
          <div className="discount_content">
            <span className="discount_offer">
              <img className='discount_img' src={discount} alt="" />
              Upto 30% Discount.{" "}
               </span>
              <p className='discount_para'>
                Encourage new customers to try your products with a discount on their first purchase.
              </p>
            <button className="discount_button btn btn-light rounded-pill">
              Buy Now
            </button>
          </div>
          <img className="discount_main_img img-fluid" src={laptop} alt="" />
        </div>
     
  );
};

export default Discount;
