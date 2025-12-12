import React from 'react'
import Slider from 'react-slick'
import SliderView from '../components/SliderView'

const HeroSection4 = () => {
  return (
      <div className='flex flex-col justify-start'>
      <h1 className="text-4xl font-bold text-gray-800 mb-5    text-left">
        Progress starts with the right tutor
      </h1>
      <p className='text-left text-gray-800 text-xl '>Precision-Built for Exam Success</p>
      <p className='text-left text-gray-600 text-xl'>Millions of learners. Over 100,000 tutors. Progress that’s personal (and proven).


</p>
    <SliderView/>
      </div>
  )
}

export default HeroSection4
