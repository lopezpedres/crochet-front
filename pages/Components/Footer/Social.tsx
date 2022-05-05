import React from "react";
const infoData = [
  {
    title: "Facebook",
  },
  {
    title: "Instagram",
  },
];

const Info = () => {
  return (
      <div className="my-4">
        <p className="text-lg mb-4">Social</p>
        {infoData.map((info, index) => {
          return (
            <div key={index}>
              <a href="#" className="text-sm">{info.title}</a>
            </div>
          );
        })}
      </div>

  );
};

export default Info;
