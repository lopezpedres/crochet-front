import React from "react";

const HeroHeather = () => {
  return (
    <div>
      <div className="flex items-center justify-center mx-auto max-w-sm">
        <div className="text-3xl lg:">Webpage</div>
        <img className="w-20" alt="WIP" src="../images/WIP.png" />
      </div>
      <div className="container grid grid-cols-1 md:grid-cols-2 mx-auto  py-6 ">
        <div className="md:p-36">
          <h1 className="text-5xl text-center">Da amor</h1>{" "}
          <h1 className="text-6xl lg:text-7xl md:text-6xl text-center">
            Da crochet
          </h1>
        </div>
        <img
          alt=""
          className=" mx-auto p-4 m-4 object-none w-72 h-96 rounded-3xl"
          src="../images/bunny.png"
        />
      </div>
    </div>
  );
};

export default HeroHeather;
