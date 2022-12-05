import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import logo1 from "../../assets/images/partner/logo1.png";
import logo2 from "../../assets/images/partner/logo2.png";
import logo3 from "../../assets/images/partner/logo3.png";
import logo4 from "../../assets/images/partner/logo4.png";
import '../../assets/css/partner.css';

const Partner = () => {
  const partners = [logo1, logo2, logo3, logo4];

  return (
    <section className="partner">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="title text-center">
              <h2>Our Partners</h2>
            </div>
          </div>
          <div className="col-md-12">
            <Swiper 
              pagination={{clickable:true}} 
              modules={[Pagination]} loop={true}
              spaceBetween={24}
              autoplay= {true}
              slidesPerGroup={1}
              breakpoints= {{
                576: {
                  slidesPerView: 2
                },
                768: {
                  slidesPerView: 3,
                },
                992: {
                  slidesPerView: 4,
                }
              }} 
              className="partner-slider">
                {
                  partners.map((item, index) => 
                    <SwiperSlide key={index}>
                      <div className="item">
                        <img src={item} alt="" />
                      </div>
                    </SwiperSlide>
                  )
                }
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Partner