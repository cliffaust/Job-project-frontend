import React from "react";

import "animate.css";

function GalleryPopup({ galleryPopup, closeGalleryModal }) {
  return (
    <div
      onClick={closeGalleryModal}
      className={
        "animate__animated animate__fadeIn animate__faster backdrop " +
        (!galleryPopup ? "hidden" : "")
      }
    >
      <div
        className={
          "w-4/5 h-600 bg-white shadow-lg fixed top-2/4 left-2/4 right-2/4 -translate-y-2/4 -translate-x-2/4 mx-auto rounded-xl animate__animated animate__fadeIn animate__faster " +
          (galleryPopup === false ? "animate__fadeOut" : "")
        }
      ></div>
    </div>
  );
}

export default GalleryPopup;
