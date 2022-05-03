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
    <section className=" mx-auto my-4 border-2 border-dotted border-black   h-auto lg:w-96 w-80 rounded-lg">
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />

        <div className="p-4">
          <img className="mx-auto" src="./upload.svg" />
          <p className="text-center w-auto ">Selecciona una imagen</p>
        </div>
      </div>
      <aside className=" rounded-lg w-1/4 m-auto ">{thumbs}</aside>
    </section>
  );
}

export default Previews;
