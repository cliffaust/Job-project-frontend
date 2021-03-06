import React, { useState, useEffect } from "react";

import GalleryPopup from "../CompanyProfile/GalleryPopup";
import BaseTextArea from "../DefaultComponents/BaseTextArea";

import ButtonPrimary from "../DefaultComponents/ButtonPrimary";

function ImageThumb({ file, filterFile }) {
  const [state, setState] = useState({
    comment: "",
    commentPopup: false,
    counter: 0,
  });

  useEffect(() => {
    file.comment = state.comment;
  }, [state.comment]);

  const closeCommentModal = (e) => {
    e.stopPropagation();
    setState({ ...state, commentPopup: false });
  };

  const showModal = () => {
    setState({ ...state, commentPopup: true });
  };

  const onChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value.slice(0, 100),
      counter: event.target.value.slice(0, 100).length,
    });
  };

  return (
    <div className="w-full">
      <div
        className={
          "w-full bg-gray-50 py-2 rounded-md " +
          (file.completedPercent === 100 ? "opacity-50" : "")
        }
      >
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
              onClick={filterFile}
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
        {file.completedPercent > 0 ? (
          <div className="border relative border-gray-200 rounded-full w-11/12 mx-auto mt-2 h-8 overflow-hidden">
            <div
              className={"bg-purple-500 h-full"}
              style={{ width: file.completedPercent + "%" }}
            ></div>
            <div className="absolute right-5 top-2/4 font-bold z-20 -translate-y-2/4">
              {file.completedPercent}%
            </div>
          </div>
        ) : null}
      </div>
      <div className="px-6">
        <GalleryPopup
          closeModal={closeCommentModal}
          showPopup={state.commentPopup}
          className="sm:w-2/4 px-6"
        >
          <BaseTextArea
            name="comment"
            placeholder="Comment"
            value={state.comment}
            onChange={onChange}
            className="mt-10"
          ></BaseTextArea>

          <p
            className={
              "font-bold " + (state.counter === 100 ? "text-red-500" : "")
            }
          >
            {state.counter}/100
          </p>

          <ButtonPrimary
            onClick={() => setState({ ...state, commentPopup: false })}
            className="mt-2 px-4 py-2 !rounded-md w-full"
          >
            Add image comment
          </ButtonPrimary>
        </GalleryPopup>
      </div>
    </div>
  );
}

export default ImageThumb;
