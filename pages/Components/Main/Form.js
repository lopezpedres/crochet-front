import React from "react";
import { useForm } from "react-hook-form";
import MyDropzone from "./DropZone";

export default function App() {
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        reset()
    };

    console.log(watch("example")); // watch input value by passing the name of it

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <div className=" container justify-items-center mx-auto grid grid-cols-1 md:grid-cols-5">
            <div className=" md:col-span-3 md:justify-items-start container mx-auto  py-10 ">
                <p className='  lg:text-5xl text-4xl text-center  '>Mándanos tu diseño</p>
                <img className=" py-10 mx-auto" src="./images/giphy.gif" />
            </div>
            <form className="container justify-items-center md:justify-items-start py-10 my-auto  text-lg grid grid-cols-1" onSubmit={ handleSubmit(onSubmit) }>
                {/* register your input into the hook by invoking the "register" function */ }
                <input className="lg:w-96 w-80 border-b border-black  text-black  pt-5 px-2 leading-tight focus:outline-none" placeholder="Nombre" { ...register("nombre", { required: true }) } />
                {/* errors will return when field validation fails  */ }
                { errors.nombre && <span>No olvides esta parte</span> }
                {/* include validation with required or other standard HTML validation rules */ }
                <input className="lg:w-96 w-80 border-b border-black   text-black  pt-5  px-2 leading-tight focus:outline-none" placeholder="Correo"  { ...register("email", { required: true }) } />
                {/* errors will return when field validation fails  */ }
                { errors.email && <span>No olvides esta parte</span> }
                <div className="lg:w-96 w-80 grid grid-cols-1  pt-5">
                    <textarea className=" border rounded-lg border-black   h-36  text-black  pt-2  px-2 leading-tight focus:outline-none" placeholder="Comentarios"  { ...register("comments", { required: true }) } />
                    {/* errors will return when field validation fails  */ }
                    { errors.email && <span className="text-center">No olvides esta parte</span> }

                </div>
                <MyDropzone />
                <button className=" h-10 w-96 border-2 rounded-md border-black bg-secondary" type="submit">
                    Enviar
                </button>
            </form>
        </div>
    );
}