import React from 'react'

const StarRating = ({rating}) => {
    
  return (
    <div className='flex gap-2 items-center w-3 h-4 '>
      
        {[...Array(rating.rating)].map((_,i)=>
        (<img key={i} src='../../public/images/grey-star-15595.jpg'/>)
        )}
        {[...Array(5-rating.rating)].map((_,i)=>
        (<img key={i} src='../../public/images/star-7207.jpg'/>)
        )}
          <p className='ml-2'>({rating.rateScore})</p>
    </div>
  ) 
}

export default StarRating