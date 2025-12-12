import React from "react";

const Card = ({heroSection4CardData}) => {
  return (
    <div className="grid grid-cols-2 h-[60vh]">
      <div className="bg-white ml-2 mr-2 my-4 overflow-hidden rounded-2xl drop-shadow-md flex ">
        <img
          src={heroSection4CardData.linkImg}
          className="h-full w-full object-cover"
        />
      </div>
      <div className=" justify-items-center pt-40">

        <p className="p-5 font-stretch-50% text-left text-3xl ">{heroSection4CardData.title}</p>
      </div>
    </div>
  );
};

export default Card;
