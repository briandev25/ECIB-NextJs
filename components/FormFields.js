import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { CameraIcon } from "@heroicons/react/solid";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import Textfield from "./Textfield";
import SelectField from "./SelectField";

function FormFields() {
  const { data: session } = useSession();

  const validate = yup.object({
    firstName: yup
      .string()
      .max(15, "Minimum of 15 characters")
      .required("Required"),
    lastName: yup
      .string()
      .max(20, "Minimum of 20 characters")
      .required("Required"),
    email: yup.string().email("Email is invalid").required("Email is required"),
    persons: yup.string().required("Required"),
    price: yup.number().required("Reqiured"),
    title: yup.string().max(20, "Not more than 20 words").required("Required"),
    category: yup.string().required("Required"),
    description: yup
      .string()
      .max(50, "Not more than 50 words")
      .required("Required"),
    phoneNo: yup
      .number()
      .min(10, "Cannot be less than 10 numbers")
      .required("Required"),
  });

  //splitting the name
  const fullName = session?.user.name;
  const splitNames = fullName?.split(/(\s+)/);

  const sendPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      message: fName,
      firstName: splitNames[0],
      lastName: splitNames[2],
      email: session.user.email,
      image: session.user.image,
    });
  };
  return (
    <div>
      <Formik
        initialValues={{
          firstName: splitNames[0],
          lastName: splitNames[2],
          email: session?.user.email,
          phoneNo: "",
          title: "",
          price: "",
          description: "",
          persons: "",
          category: "",
        }}
        validationSchema={validate}
        onSubmit={(values) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
          }, 400);
        }}
      >
        {({ values }) => (
          <Form>
            <div className=" mt-5 mb-10 mx-10 flex flex-col space-y-5">
              <div className="flex flex-col  space-y-6 ">
                {/* First Name */}
                <Textfield label="First Name:" name="firstName" type="text" />
                {/* Last Name */}
                <Textfield label="Last Name:" name="lastName" type="text" />
              </div>

              <div className="flex flex-col  space-y-6 ">
                {/* Email Address */}
                <Textfield label="Email Addr:" name="email" type="email" />
                {/* Phone Number */}
                <Textfield label="Phone No:" name="phoneNo" type="phone" />
              </div>
              <div className="flex flex-col  space-y-6 ">
                {/* Persons */}
                <SelectField
                  labelName="Persons:"
                  choices={["", "Resident", "Non-resident"]}
                  name="persons"
                  selectField
                />
                {/* Phone Number */}
                <SelectField
                  labelName="Category"
                  choices={[
                    "",
                    "Electronics",
                    "Phones",
                    "Pets",
                    "Funiture",
                    "Beddings",
                    "Jobs",
                    "Services",
                  ]}
                  name="category"
                  selectField
                />
              </div>
              <div className="flex flex-col  space-y-6 ">
                {/* Email Address */}
                <Textfield label="Product Title:" name="title" type="text" />
                {/* Phone Number */}
                <Textfield label="Price:" name="price" type="number" />
              </div>
              <SelectField name="description" type="text" textArea />
              <button className="submitButton" type="submit">
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormFields;
