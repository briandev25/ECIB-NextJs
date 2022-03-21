import React from "react";
import { useField, ErrorMessage } from "formik";

function SelectField({ labelName, textArea, selectField, choices, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div>
      {selectField && (
        <div className="flex flex-col items-center space-x-3">
          <label className="inputLabel">{labelName}</label>
          <select
            className={`inputField ${
              meta.touched && meta.error && "border-red-700"
            }`}
            {...field}
            {...props}
          >
            <option selected disabled hidden>
              Select An Option
            </option>
            {choices.map((choice) => (
              <option key={choice}>{choice}</option>
            ))}
          </select>
          <ErrorMessage
            className=" text-red-800"
            name={field.name}
            component="div"
          />
        </div>
      )}
      {textArea && (
        <div className="flex flex-col items-center space-x-3">
          <label className="inputLabel">Description:</label>
          <textarea
            className={`inputField ${
              meta.touched && meta.error && "border-red-700"
            }`}
            cols="50"
            {...field}
            {...props}
            rows="4"
          ></textarea>
          <ErrorMessage
            className=" text-red-800"
            name={field.name}
            component="div"
          />
        </div>
      )}
    </div>
  );
}

export default SelectField;
