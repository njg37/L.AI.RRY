import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "./swiper.css";
import { ExamsCoveredData } from "../data/ExamsCoveredData";
import ExamsCoveredCard from "./ExamsCoveredCard";

const ExamsSliderView = () => {
  // Duplicate slides for infinite scrolling
  const slides = [...ExamsCoveredData, ...ExamsCoveredData];

  return (
    <div className="-mt-22">
      <Swiper
        modules={[Autoplay, FreeMode]}
        freeMode={{ enabled: true, momentum: false }}
        spaceBetween={20}
        slidesPerView={8}
        loop={true}
        speed={5000} // adjust for smooth speed
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        loopAdditionalSlides={ExamsCoveredData.length} // ensures enough slides for looping
        breakpoints={{
          0: { slidesPerView: 3, spaceBetween: 10 },
          480: { slidesPerView: 4, spaceBetween: 15 },
          768: { slidesPerView: 6, spaceBetween: 20 },
          1024: { slidesPerView: 7, spaceBetween: 20 },
          1280: { slidesPerView: 10, spaceBetween: 20},
        }}
      >
        {slides.map((item, index) => (
          <SwiperSlide key={`slide-${index}`}>
            <ExamsCoveredCard exam={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ExamsSliderView;
