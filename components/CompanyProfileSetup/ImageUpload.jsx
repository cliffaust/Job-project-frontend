import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import axios from "axios";
import { assignIn } from "lodash";

import ImageThumb from "./ImageThumb";
import ButtonPrimary from "../DefaultComponents/ButtonPrimary";
import ButtonLoadingSpinner from "../DefaultComponents/ButtonLoadingSpinner";

function ImageUpload() {
  const [files, setFiles] = useState([]);

  const [loading, setLoading] = useState(false);

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

  const sendCompanyProfileImage = async () => {
    try {
      setLoading(true);
      const companyProfile = await axios.get(
        `${process.env.NEXT_PUBLIC_baseURL}/user-company-profile/`,
        {
          headers: {
            Authorization: "Token " + Cookies.get("token"),
          },
        }
      );
      if (await companyProfile.data.slug) {
        if (files.length > 0) {
          files.forEach((file, index) => {
            const fd = new FormData();
            fd.append("image", file, file.name);
            fd.append("comment", file.comment);

            try {
              axios.post(
                `${process.env.NEXT_PUBLIC_baseURL}/company-profiles/${companyProfile.data.slug}/create-company-profile-image/`,
                fd,
                {
                  headers: {
                    Authorization: "Token " + Cookies.get("token"),
                  },
                  onUploadProgress: (progressEvent) => {
                    let percentCompleted = Math.floor(
                      (progressEvent.loaded * 100) / progressEvent.total
                    );

                    let updatedFiles = files.map((item) => {
                      if (item.id === index) {
                        return assignIn(item, {
                          completedPercent: percentCompleted,
                        });
                      }
                      return item;
                    });

                    setFiles(updatedFiles);
                  },
                }
              );
            } catch (error) {
              console.log(error.response);
            }
          });
        }
      }
      router.push("/company-profile");
    } catch (error) {
      setLoading(false);
      console.log(error.response.data);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    accepts: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        files.concat(
          acceptedFiles.map((file, index) =>
            Object.assign(file, {
              id: index,
              preview: URL.createObjectURL(file),
              comment: "",
              completedPercent: 0,
            })
          )
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
        <div className="flex flex-col gap-8 items-center mt-6">
          {files.length > 0 ? (
            <h3 className="text-gray-400 mb-4">All files</h3>
          ) : null}

          {thumbs}
        </div>
        {files.length > 0 ? (
          <ButtonPrimary
            onClick={sendCompanyProfileImage}
            className={
              "mt-6 px-8 py-1.5 !rounded-md float-right " +
              (loading ? "opacity-60" : "")
            }
          >
            {!loading ? <span>Post</span> : ""}{" "}
            <div>
              {loading ? <ButtonLoadingSpinner></ButtonLoadingSpinner> : ""}
            </div>
          </ButtonPrimary>
        ) : null}
      </div>
    </div>
  );
}

export default ImageUpload;
