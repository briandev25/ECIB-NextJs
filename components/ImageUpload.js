import React, { useRef, useState } from "react";
import { CameraIcon } from "@heroicons/react/solid";
import { useField, ErrorMessage } from "formik";

function ImageUpload({ addImageToPost, postImage, removeImage, ...props }) {
  const [field, meta] = useField(props);
  const filePickerRef = useRef(null);

  return (
    <div className="flex flex-col items-center">
      <div className=" flex items-center justify-center">
        <div className="flex items-center">
          <CameraIcon
            onClick={() => filePickerRef.current.click()}
            className="h-12 cursor-pointer"
          />
        </div>
        <h1 className=" text-lg font-semibold">Upload Image</h1>
      </div>
      <div>
        {postImage && (
          <div className="flex flex-col items-center">
            <img src={postImage} alt="" className=" h-12 object-contain" />
            <p onClick={removeImage} className=" cursor-pointer">
              Remove
            </p>
          </div>
        )}
        <input
          onChange={addImageToPost}
          //onClick={}
          ref={filePickerRef}
          hidden
          {...field}
          {...props}
        />
        <ErrorMessage
          className=" text-red-800"
          name={field.name}
          component="div"
        />
      </div>
    </div>
  );
}

export default ImageUpload;
