import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import MyDropzone from "./DropZone";
import { postImageProposal } from "../../utils/postImageProposal";
import { postProposal } from "../../utils/postProposal";
type Inputs = {
  name: string;
  email: string;
  comments: string;
};
export default function Form() {
  const [files, setFiles] = useState([]);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const urlImage = await postImageProposal(files[0]);
    const newProposal = await postProposal({ ...data, url: urlImage });
    console.log(newProposal);
    reset();
  };
  // console.log(watch("name")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <div className=" container justify-items-center mx-auto grid grid-cols-1 md:grid-cols-2 my-11 md:mt-28">
      <div className="  md:justify-items-start container mx-auto  p-10 ">
        <p className="  lg:text-5xl text-4xl text-center  ">
          Hacemos en crochet tus sueños!
        </p>
        <p className=" py-10  lg:text-3xl text-2xl text-center  ">
          Si tienes alguna idea de lo que quieres hacer, mándanos tu diseño
        </p>
      </div>
      <div className="w-full max-w-sm">
        <form
          className="bg-secondary shadow-2xl rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Nombre
              <input
                className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                placeholder="Nombre"
                {...register("name", { required: true })}
              />
            </label>
            {errors.name && (
              <p className="text-black text-xs italic">No olvides esta parte</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Correo
              <input
                className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Correo"
                {...register("email", { required: true })}
              />
            </label>
            {errors.email && (
              <p className="text-black text-xs italic">No olvides esta parte</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Comentarios
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 h-32 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                placeholder="Comentarios"
                {...register("comments", { required: true })}
              />
            </label>
            {errors.email && (
              <p className="text-black text-xs italic">No olvides esta parte</p>
            )}
          </div>
          <label className="block cursor-pointer text-gray-700 text-sm font-bold mb-">
            Imagenes
          <MyDropzone files={files} setFiles={setFiles} />
          </label>
          <button
            className=" block h-10 w-32 mx-auto border-2 rounded-md shadow-xl border-gray-700 bg-secondary hover:bg-gray-800 hover:text-white"
            type="submit"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
