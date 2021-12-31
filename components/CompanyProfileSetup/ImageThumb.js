import React, { useState } from "react";
import GalleryPopup from "../CompanyProfile/GalleryPopup";

function ImageThumb({ file }) {
  const [state, setState] = useState({
    comment: "",
    commentPopup: false,
  });

  const closeCommentModal = (e) => {
    e.stopPropagation();
    setState({ ...state, commentPopup: false });
  };

  const showModal = () => {
    setState({ ...state, commentPopup: true });
  };
  return (
    <div>
      <div className="w-full">
        <div className="rounded-lg flex items-center gap-4 justify-between px-6 py-1">
          <img
            src={file.preview}
            alt="Company Image"
            className="w-20 h-14 object-cover rounded-lg"
          />
          <p className="text-gray-400 block w-2/4 truncate">{file.path}</p>
          <div className="flex justify-end gap-8 flex-grow items-center">
            <p>{(file.size / 1_048_576).toFixed(2)}MB</p>
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
        <button
          onClick={showModal}
          className="my-2 font-fold text-purple-600 bg-purple-100 ml-4 py-1 px-2 rounded-md"
        >
          Add a comment
        </button>
      </div>
      <GalleryPopup
        closeModal={closeCommentModal}
        showPopup={state.commentPopup}
        className="w-2/4 px-6"
      >
        <p className="px-6 mb-4 font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          quia quae quas perferendis. Ducimus consectetur nam, error distinctio
          fugit esse porro facere totam maxime aliquam similique dolores
          exercitationem? Inventore, temporibus?
        </p>
      </GalleryPopup>
    </div>
  );
}

export default ImageThumb;
