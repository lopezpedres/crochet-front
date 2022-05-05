import React, { useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";

//Todo: Create Preview Props
function Previews({ files, setFiles }) {
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
      console.log(acceptedFiles);
    },
  });

  const thumbs = files.map((file) => (
    <div className="inline-flex" key={file.name}>
      <div className="flex overflow-hidden min-w-0">
        <img
          src={file.preview}
          className="h-full w-auto block"
          // Revoke data uri after image is loaded
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
        />
      </div>
    </div>
  ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <>
      <section className=" bg-white  appearance-none border-2 border-dashed border-gray-700  rounded w-full py-2 px-3 h-32 text-gray-700  focus:outline-none focus:shadow-outline mb-4 ">
        <div {...getRootProps({ className: "dropzone" })}>
          <input {...getInputProps()} />
        </div>
        {files.length === 0 && (
          <div className=" p-4">
            <img className="mx-auto" src="./upload.svg" />
            <p className="text-center w-auto ">
              Haz click para seleccionar una imagen
            </p>
          </div>
        )}
        <div className=" w-10 h-10 m-auto ">
          <aside className=" my-4 border">{thumbs}</aside>
        </div>
         {(files.length>0) && <p className=" my-4 text-xs">Haz click para seleccionar una imagen differente</p>}
      </section>
    </>
  );
}

export default Previews;
