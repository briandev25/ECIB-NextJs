import React, { useRef, useState } from "react";
import { useSession } from "next-auth/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import Textfield from "./Textfield";
import SelectField from "./SelectField";
import ImageUpload from "./ImageUpload";
import { db, storage } from "../firebase";
import firebase from "firebase";
import { CameraIcon } from "@heroicons/react/solid";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";

function FormFields() {
  const { data: session } = useSession();
  const [postImage, setPostImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const filePickerRef = useRef(null);

  console.log(postImage);

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
      .min(50, "Not less than 50 words")
      .required("Required"),
    phoneNo: yup
      .number()
      .min(10, "Cannot be less than 10 numbers")
      .required("Required"),
    imageToPost: yup.mixed().required("Required"),
  });

  const sendPost = (values) => {
    const {
      firstName,
      lastName,
      email,
      userImage,
      phoneNo,
      title,
      price,
      description,
      persons,
      category,
      imageToPost,
    } = values;

    db.collection("posts")
      .add({
        firstName,
        lastName,
        email,
        userImage,
        phoneNo,
        title,
        price,
        description,
        persons,
        category,
        timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then((doc) => {
        const uploadTask = storage
          .ref(`posts/${doc.id}`)
          .putString(postImage, "data_url");
        removeImage();

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            var prog = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setProgress(prog);
          },
          (err) => console.log(err),
          () => {
            //When upload completes
            storage
              .ref(`posts/${doc.id}`)
              .getDownloadURL()
              .then((url) => {
                db.collection("posts")
                  .doc(doc.id)
                  .set({ postImage: url }, { merge: true });
              });
          }
        );
      });
  };

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setPostImage(readerEvent.target.result);
    };
  };

  const removeImage = () => {
    setPostImage(null);
  };

  return (
    <div>
      <Formik
        initialValues={{
          firstName: session?.user.name.split(/(\s+)/)[0],
          lastName: session?.user.name.split(/(\s+)/)[2],
          email: session?.user.email,
          userImage: session?.user.image,
          phoneNo: "",
          title: "",
          price: "",
          description: "",
          persons: "",
          category: "",
          imageToPost: "ree",
        }}
        validationSchema={validate}
        onSubmit={(values) => {
          setTimeout(() => {
            sendPost(values);
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
                <Textfield label="Email Address:" name="email" type="email" />
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
                    "Services",
                    "Jobs",
                    "Kitchenware",
                    "Shoes",
                    "Fashion",
                    "Bags",
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
              <div>
                <div className="flex flex-col items-center">
                  <div className="flex items-end">
                    <CameraIcon
                      onClick={() => filePickerRef.current.click()}
                      className=" h-12 cursor-pointer"
                    />
                    <p className="text-lg font-semibold">Upload Image</p>
                  </div>
                  <div>
                    {postImage && (
                      <div className="h-12 w-12">
                        <img
                          src={postImage}
                          alt=""
                          className=" h-12 object-contain"
                        />
                        <p onClick={removeImage} className=" cursor-pointer">
                          Remove
                        </p>
                      </div>
                    )}
                    <input
                      ref={filePickerRef}
                      type="file"
                      hidden
                      onChange={addImageToPost}
                    />
                    <ErrorMessage
                      className=" text-red-800"
                      name="imageToPost"
                      component="div"
                    />
                  </div>
                </div>
              </div>

              <button className="submitButton" type="submit">
                Submit
              </button>
              <div className="flex items-center justify-center">
                {progress > 0 && (
                  <Progress type="circle" percent={progress} status="success" />
                )}
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormFields;
