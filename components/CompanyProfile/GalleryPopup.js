import React from "react";
import { motion, AnimatePresence } from "framer-motion";

function GalleryPopup({
  showPopup,
  closeModal,
  className,
  children,
  backdropClassName,
}) {
  const backdrop = {
    show: {
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },

    hidden: {
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const container = {
    show: {
      y: "20px",
      transition: {
        type: "spring",
        stiffness: 60,
        delay: 0.2,
      },
    },

    hidden: {
      y: "-100vh",
      transition: {
        type: "spring",
        stiffness: 60,
      },
    },
  };
  return (
    <AnimatePresence exitBeforeEnter>
      {showPopup ? (
        <motion.div
          onClick={closeModal}
          variants={backdrop}
          animate="show"
          initial="hidden"
          exit="hidden"
          className={"backdrop overflow-y-scroll " + backdropClassName}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            variants={container}
            className={
              "p-4 bg-white shadow-lg mx-auto rounded-xl z-20 overflow-y-scroll relative " +
              className
            }
          >
            {children}
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-6 right-6 cursor-pointer lg:hidden w-7 h-7 z-20"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={closeModal}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </motion.div>
        </motion.div>
      ) : (
        ""
      )}
    </AnimatePresence>
  );
}

export default GalleryPopup;
