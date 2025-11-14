import React from "react";

const Card = ({title, des}) => {
  return (
    <div className="relative h-[55vh] w-96  hover:scale-102 transition-all duration-300 ease-out hover:shadow-md cursor-pointer">
      <span className="absolute z-2 top-[8%] right-[5%] h-12 border border-white/60"></span>

      <span className="absolute top-[30%] right-[7%] w-24 h-24 rounded-full bg-[#fab5704c]"></span>

      <div className="w-full h-full px-10 py-16 backdrop-blur-xl bg-white/10 border border-white/30 rounded-lg transition-all duration-200 hover:border-white/50">
        <h1 className="text-4xl uppercase font-medium pb-8 text-white">
          {title}
        </h1>
        <p className="text-xl text-neutral-400">
          {des}
        </p>
      </div>
    </div>
  );
};

export default Card;
