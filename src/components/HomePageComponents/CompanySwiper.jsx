import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

const CompanySwiper = () => {
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
        <SwiperSlide>
          <img src="https://images.squarespace-cdn.com/content/v1/5b097b4a4cde7ab1c2125706/a4f3adba-a956-425d-a173-e7dbd83f2867/CathieHong_Emory_124.JPG?format=500w" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.squarespace-cdn.com/content/v1/5b097b4a4cde7ab1c2125706/453a110a-2c8d-47c3-b16e-10e54f6813dd/CathieHong_Emory_003.JPG?format=500w" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.squarespace-cdn.com/content/v1/5b097b4a4cde7ab1c2125706/12a239ed-f0b3-402b-b5ff-007b72a1da97/CathieHong_Emory_007.JPG?format=500w" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.squarespace-cdn.com/content/v1/5b097b4a4cde7ab1c2125706/c8c48931-baf4-4632-b5f3-42e3aa3df3eb/CathieHong_Smith_6.jpg?format=750w" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.squarespace-cdn.com/content/v1/5b097b4a4cde7ab1c2125706/17372347-279e-4e96-a30e-4fd923fbd6f8/CathieHong_Smith_15.jpg?format=750w" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.squarespace-cdn.com/content/v1/5b097b4a4cde7ab1c2125706/e5cd3368-9ba0-4a98-b7a8-32997bd6d498/CathieHong_Smith_7.jpg?format=750w" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.squarespace-cdn.com/content/v1/5b097b4a4cde7ab1c2125706/135b4ab7-b00b-4d5c-a71c-cf0485ed1c50/CathieHong_Smith_8.jpg?format=750w" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.squarespace-cdn.com/content/v1/5b097b4a4cde7ab1c2125706/fc0424c8-493c-4b69-a887-c54d66bc736b/CathieHong_Smith_13.jpg?format=500w" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.squarespace-cdn.com/content/v1/5b097b4a4cde7ab1c2125706/1570b4f0-a155-4b04-8541-aefbf8b9f771/CathieHong_Smith_14.jpg?format=500w" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default CompanySwiper;
