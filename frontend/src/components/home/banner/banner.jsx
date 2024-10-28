import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "./banner.css";
import headphoneImage from "../../../assets/banner images/headphone.png";
import mobilewatch from "../../../assets/banner images/mobilewatch.png";
import speaker from "../../../assets/banner images/speaker.png";

const Banner = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      autoplay={{ delay: 3000 }}
      loop={true}
    >
      <SwiperSlide>
        <div className="Banner slide-content d-flex justify-content-between align-items-center">
          <div className="banner_content">
            <span className="h1">JBL HEADPHONES</span>
            <p className="h6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              <i className="extra">
                Architecto cumque esse odio! amet consectetur adipisicing eli
              </i>
            </p>
            <button className="button btn btn-primary rounded-pill">
              Buy Now
            </button>
          </div>
          <img className="banner_img img-fluid" src={headphoneImage} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="Banner slide-content d-flex justify-content-between align-items-center">
          <div className="banner_content">
            <span className="h1">APPLE WATCH</span>
            <p className="h6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              <i>
                Architecto cumque esse odio! amet consectetur adipisicing eli
              </i>
            </p>
            <button className="button btn btn-light rounded-pill btn-outline-dark">
              Buy Now
            </button>
          </div>
          <img className="banner_img img-fluid" src={mobilewatch} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="Banner slide-content d-flex justify-content-between align-items-center">
          <div className="banner_content">
            <span className="h1">JBL SPEAKER</span>
            <p className="h6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              <i>
                Architecto cumque esse odio! amet consectetur adipisicing eli
              </i>
            </p>
            <button className="button btn btn-danger rounded-pill ">
              Buy Now
            </button>
          </div>
          <img className="banner_img img-fluid" src={speaker} alt="" />
        </div>
      </SwiperSlide>
     
    </Swiper>
  );
};

export default Banner;
