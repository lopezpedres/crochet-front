import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import MyDropzone from "./DropZone";
import {postImageProposal} from "../../utils/postImageProposal";
import {postProposal} from "../../utils/postProposal";
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
    const urlImage= await postImageProposal(files[0]);
    const newProposal =  await postProposal({...data, url: urlImage})
    console.log(newProposal)
    reset();
  };
  // console.log(watch("name")); // watch input value by passing the name of it


  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <div className=" container justify-items-center mx-auto grid grid-cols-1 md:grid-cols-5">
      <div className=" md:col-span-3 md:justify-items-start container mx-auto  p-10 ">
        <p className="  lg:text-5xl text-4xl text-center  ">
          Hacemos en crochet tus sueños!
        </p>
        <p className=" py-10  lg:text-3xl text-2xl text-center  ">
          Si tienes alguna idea de lo que quieres hacer, mándanos tu diseño
        </p>
      </div>
      <form
        className="container justify-items-center md:justify-items-start py-10 my-auto  text-lg grid grid-cols-1"
        onSubmit={handleSubmit(onSubmit)}
      >
        <p className="  lg:text-5xl text-4xl text-center  ">
          Hacemos en crochet tus sueños!
        </p>
        <input
          className="lg:w-96 w-80 border-b border-black  text-black  pt-5 px-2 leading-tight focus:outline-none"
          placeholder="Nombre"
          {...register("name", { required: true })}
        />
        {errors.nombre && <span>No olvides esta parte</span>}
        <input
          className="lg:w-96 w-80 border-b border-black   text-black  pt-5  px-2 leading-tight focus:outline-none"
          placeholder="Correo"
          {...register("email", { required: true })}
        />
        {errors.email && <span>No olvides esta parte</span>}
        <div className="lg:w-96 w-80 grid grid-cols-1  pt-5">
          <textarea
            className=" border rounded-lg border-black   h-36  text-black  pt-2  px-2 leading-tight focus:outline-none"
            placeholder="Comentarios"
            {...register("comments", { required: true })}
          />
          {errors.email && (
            <span className="text-center">No olvides esta parte</span>
          )}
        </div>
        <MyDropzone files={files} setFiles={setFiles} />
        <button
          className=" h-10 w-96 border-2 rounded-md border-black bg-secondary"
          type="submit"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
