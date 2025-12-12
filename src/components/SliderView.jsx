import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "./Card";
import { HeroSection4CardData } from "../data/HeroSection4CardData";
import { TestimonialData } from "../data/TestimonialData";
import TestimonialCard from "../components/TestimonialCard";
import { ExamsCoveredData } from "../data/ExamsCoveredData";
import ExamsCoveredCard from "./ExamsCoveredCard";

const SliderView = () => {
  var settings = {
    dots: true,

    infinite: true,
    speed: 5000 ,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // 2 seconds
    pauseOnHover: false,
      
    cssEase: "linear",
  };
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ];
  return (
    <div className="  py-24 ">
      <div className=" ">
        {/* <Slider {...settings}> */}
        {/* {HeroSection4CardData.map(heroSection4CardData=><Card heroSection4CardData={heroSection4CardData} />)} */}
        {/* <div className=''>

                            {TestimonialData.map(testimonialData=><TestimonialCard testimonialData={testimonialData} />)}
              </div> */}

        {/* <Card />
                <Card/>
                <Card/>
                <Card/> */}
        {/* </Slider> */}

        <Slider {...settings}>
          {TestimonialData.map((testimonialData) => (
            <div
             key={testimonialData.id} className="px-3">
              <TestimonialCard testimonialData={testimonialData} />
               </div>
          ))}
          {/* {ExamsCoveredData.map((examsCoveredData) => (
            <div
             key={examsCoveredData.id} className="px-3">
              <ExamsCoveredCard testimonialData={examsCoveredData} />
               </div>
          ))} */}

        </Slider>

      </div>
    </div>
  );
};

export default SliderView;
