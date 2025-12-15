import React from 'react'
import TestimonialCard from '../components/TestimonialCard'
import {TestimonialData} from '../data/TestimonialData'
import Slider from 'react-slick'
import SliderView from '../components/SliderView'

const Testimonial = () => {

  return (
    <div className='bg-green-200'>
    <div className="flex flex-col justify-center pt-29 pb-29 ml-10">
      <h1 className="text-5xl font-bold text-gray-800 mb-5 ">
        What our other students are saying
      </h1>
      <p className=" text-gray-800 text-2xl ">
        Precision-Built for Exam Success
      </p>
      <p className=" text-gray-600 text-2xl">
        Millions of learners. Over 100,000 tutors. Progress that’s personal (and
        proven).
      </p>
      <div className=' -ml-10  '>
                <SliderView/>
            </div>
    </div>
    </div>
  )
}

export default Testimonial
