import React from "react";
import { useField, ErrorMessage } from "formik";

function Textfield({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col items-center space-y-3  space-x-5">
      <label htmlFor={field.name} className="inputLabel">
        {label}
      </label>
      <div className="flex flex-col items-center">
        <input
          className={`inputField ${
            meta.touched && meta.error && "border-red-700"
          }`}
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

export default Textfield;
