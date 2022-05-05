import React from "react";
const infoData = [
  {
    title: "Nosotros",
  },
  {
    title: "FAQ",
  },
  {
    title: "Terminos y condiciones",
  },
  {
    title: "Aviso de Privacidad",
  },
];

const Info = () => {
  return (
    <div className="my-4">
      <p className="text-lg mb-4 ">Info</p>
      {infoData.map((info, index) => {
        return (
          <div key={index}>
            <a href="#" className="text-sm">
              {info.title}
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Info;
