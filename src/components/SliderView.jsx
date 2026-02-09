import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import TestimonialCard from "../components/TestimonialCard";
import { TestimonialData } from "../data/TestimonialData";

const SliderView = () => {
  return (
    <div className="pt-15">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        loop={true}
        speed={5000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        freeMode={true}
        freeModeMomentum={false}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 16,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
      >
        {TestimonialData.map((testimonialData) => (
          <SwiperSlide key={testimonialData.id}>
            <TestimonialCard testimonialData={testimonialData} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderView;