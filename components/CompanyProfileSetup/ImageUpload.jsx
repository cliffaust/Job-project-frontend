import React from "react";
import { useDropzone } from "react-dropzone";

function ImageUpload() {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file) => (
    <div className="w-full">
      <div className="rounded-lg flex justify-between px-6 py-1 bg-gray-50">
        <p className="text-gray-400">{file.path}</p>
        <div className="flex gap-8 items-center">
          <p>{file.size / 1_048_576}MB</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 cursor-pointer"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="py-4 px-6">
      <div
        {...getRootProps}
        className="swiper-setup-pagination swiper-setup-button-prev cursor-pointer flex items-center gap-2"
      >
        <input {...getInputProps} />
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
      <div className="mx-auto mt-8 w-800 bg-white rounded-lg h-500 shadow-xl px-12 py-8">
        <h1 className="font-bold text-center text-2xl text-gray-600">
          Upload your images
        </h1>
        <div className="mt-6 rounded-lg flex flex-col items-center justify-center py-10 box-dashed border-purple-600">
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
        <div className="flex flex-col items-center mt-6">
          {acceptedFiles.lenght > 0 ? (
            <h3 className="text-gray-400 mb-4">All files</h3>
          ) : null}

          {files}
        </div>
      </div>
    </div>
  );
}

export default ImageUpload;
