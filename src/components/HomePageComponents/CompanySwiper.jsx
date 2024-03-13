import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const CompanySwiper = () => {
  const [designs, setDesigns] = useState([]);
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setDesigns(data.items));
  }, []);
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {designs.map((design, index) => (
          <SwiperSlide key={index}>
            <Link to={`/portfolioDetails/${design.id}`}>
              <img src={design.image1} alt="" />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CompanySwiper;
