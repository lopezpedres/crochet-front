import React from "react";

const HeroHeather = () => {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 mx-auto  py-6 ">
      <div className="md:p-36">
        <h1 className="text-5xl text-center">Da amor</h1>{" "}
        {/* // Here I want to change amor for many different words*/}
        <h1 className="text-6xl lg:text-7xl md:text-6xl text-center">
          Da crochet
        </h1>
      </div>
      <img
        className=" mx-auto p-4 m-4 object-none w-72 h-96 rounded-3xl"
        src="../images/bunny.png"
      />
    </div>
  );
};

export default HeroHeather;
