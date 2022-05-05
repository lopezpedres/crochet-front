import React from "react";
import Carrosuel from "./Carrosuel";

const HeroCarrousel = () => {
  return (
    <div className="container md:px-4 md:py-6  grid grid-cols-1 md:grid-cols-3 mx-auto">
      <div className=" md:order-last py-14 col-span-1">
        <p className=" text-5xl lg:text-7xl md:text-5xl content-center text-center ">
          Lo más vendido
        </p>
      </div>
      <div className="col-span-2">
        <Carrosuel />
      </div>
    </div>
  );
};

export default HeroCarrousel;
