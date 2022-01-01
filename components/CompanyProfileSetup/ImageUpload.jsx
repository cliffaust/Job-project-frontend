import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { useRouter } from "next/router";

import ImageThumb from "./ImageThumb";

function ImageUpload() {
  const [files, setFiles] = useState([]);

  useEffect(
    () => () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  const { getRootProps, getInputProps } = useDropzone({
    accepts: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
            comment: "",
          })
        )
      );
    },
  });

  const removeImageThumb = (file) => {
    const filterFiles = files.filter(
      (filterFile) => filterFile.path !== file.path
    );

    console.log(filterFiles);

    setFiles(filterFiles);
  };

  const thumbs = files.map((file) => (
    <ImageThumb
      file={file}
      key={file.path}
      filterFile={() => removeImageThumb(file)}
    ></ImageThumb>
  ));

  return (
    <div className="py-4 px-6">
      <div onClick={goBack} className="cursor-pointer flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-purple-600"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
        <h3 className="font-bold text-purple-600">Go Back</h3>
      </div>
      <div className="mx-auto mt-8 w-800 bg-white rounded-lg max-h-600 overflow-y-scroll shadow-xl px-12 py-8">
        <h1 className="font-bold text-center text-2xl text-gray-600">
          Upload your images
        </h1>
        <div
          {...getRootProps({
            className:
              "mt-6 rounded-lg flex flex-col items-center justify-center py-10 box-dashed border-purple-600",
          })}
        >
          <input {...getInputProps()} />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
            className="h-32 w-32 text-purple-600"
          >
            <path
              d="M20 5h-9.586L8.707 3.293A.997.997 0 0 0 8 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2z"
              fill="currentColor"
            />
          </svg>
          <h3 className="text-gray-400">Drag & Drop your image here</h3>
        </div>
        <div className="flex flex-col gap-4 items-center mt-6">
          {files.length > 0 ? (
            <h3 className="text-gray-400 mb-4">All files</h3>
          ) : null}

          {thumbs}
        </div>
      </div>
    </div>
  );
}

export default ImageUpload;
