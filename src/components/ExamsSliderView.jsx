import React from "react";
import Slider from "react-slick";
import { ExamsCoveredData } from "../data/ExamsCoveredData";
import ExamsCoveredCard from "./ExamsCoveredCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ExamsSliderView = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 9000,
    slidesToShow: 10,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    pauseOnHover: false,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div className="-mt-22 ">
      <Slider {...settings}>
        {ExamsCoveredData.map((item) => (
          <div key={item.id} className="px-3 ">
            <ExamsCoveredCard exam={item} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ExamsSliderView;
