import React from "react";

const Newsletter = () => {
  return (
    <form className="block w-full max-w-xs mx-auto ">
      <div className="pb-4">
        <p>Newsletter</p>
      </div>
      <div className="flex items-center border-b border-gray-700 py-2">
        <input
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="Correo Electronico"
        />
        <button
          className="flex-shrink-0 border-2 rounded-md shadow-xl border-gray-700 bg-secondary hover:bg-gray-800 hover:text-white py-1 px-2"
          type="button"
        >
          Enviar
        </button>
      </div>
      <div>
        <label>
          Acepta nuestros terminos y condiciones
          <input

            className="appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-white checked:border-secondary focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            type="checkbox"
          />
        </label>
      </div>
    </form>
  );
};

export default Newsletter;
