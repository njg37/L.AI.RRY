import React from "react";

const StarRating = ({ rating = 0, rateScore }) => {

  const safeRating = Math.max(0, Math.min(5, Number(rating) || 0));

  return (
    <div className="flex gap-2 items-center">

      {/* Filled Stars (Yellow) */}
      {[...Array(safeRating)].map((_, i) => (
        <img
          key={`filled-${i}`}
          src="/images/grey-star-15595.jpg"
          className="w-4 h-4"
        />
      ))}

      {/* Empty Stars */}
      {[...Array(5 - safeRating)].map((_, i) => (
        <img
          key={`empty-${i}`}
          src="/images/star-7207.jpg"
          className="w-4 h-4"
        />
      ))}

      {rateScore && <p className="ml-2">({rateScore})</p>}
    </div>
  );
};

export default StarRating;
