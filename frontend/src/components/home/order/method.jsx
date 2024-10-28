import "./method.css";
import freeship from '../../../assets/service/freeship.png'
import card from '../../../assets/service/card.png'
import costumerservice from '../../../assets/service/costumerservice.png'

const Method = () => {
  return (
    <div>
      <div className="method row ">
        <div className="method_content card col-4">
          <img className="method_img img-fluid " src={freeship} alt="free shipping" />
          <p className="method_text">we offer free shipping for purchases made with card payments to encourage more transactions.</p>
        </div>
        <div className="method_content card col-4">
          <img className="method_img img-fluid " src={card} alt="credit card" />
          <p className="method_text">We accept all cards with 0 transaction fees and gives many discounts on card payment.</p>{" "}
        </div>
        <div className=" method_content card col-4">
          <img className="method_img img-fluid " src={costumerservice} alt="24/7 service" />
          <p className="method_text">We ensure customers can reach support at any time through multiple channels (phone, chat, email).</p>{" "}
        </div>
      </div>
    </div>
  );
};

export default Method;
