import React from "react";
import { motion, AnimatePresence } from "framer-motion";

function GalleryPopup({ showPopup, closeModal, className, children }) {
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
          className="backdrop overflow-y-scroll"
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            variants={container}
            className={
              "p-4 bg-white shadow-lg mx-auto rounded-xl z-20 overflow-y-scroll " +
              className
            }
          >
            {children}
          </motion.div>
        </motion.div>
      ) : (
        ""
      )}
    </AnimatePresence>
  );
}

export default GalleryPopup;
