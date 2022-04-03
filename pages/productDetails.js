import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { withRouter } from "next/router";
import CurrencyFormat from "react-currency-format";
import { PhoneIcon } from "@heroicons/react/solid";
import Image from "next/image";

function ProductDetails({ router }) {
  const [showContact, setShowContact] = useState(false);
  const {
    category,
    postImage,
    title,
    description,
    price,
    timeStamp,
    userImage,
    phoneNo,
    persons,
    firstName,
    lastName,
  } = router.query;

  return (
    <div>
      <Header />
      <div className="h-[calc(100vh-70px)] max-w-screen-xl mx-auto mt-10 lg:flex">
        {/* Image section */}
        <div className=" w-3/5">
          <div className=" relative h-[550px] max-w-full">
            <Image
              src={postImage}
              layout="fill"
              objectFit="cover"
              className=" rounded-lg overflow-hidden"
            />
          </div>
        </div>
        {/*Product Details Section */}
        <div className=" w-2/5 flex flex-col items-center mx-4">
          {/* Price */}
          <div className=" flex items-center justify-between px-5 bg-white w-full shadow-md">
            <h1 className=" text-2xl font-semibold text-gray-500">Price:</h1>
            <CurrencyFormat
              renderText={(value) => (
                <p className=" text-2xl text-center py-5 font-semibold">
                  {value}
                </p>
              )}
              value={price}
              displayType={"text"}
              thousandSeparator={true}
              prefix="Ksh"
            />
          </div>
          {/* description */}
          <div className="flex items-center justify-between px-5 bg-white w-full shadow-md">
            <p className=" text-2xl font-semibold text-gray-500">Category:</p>
            <p className=" text-2xl text-center py-5 font-semibold">
              {category}
            </p>
          </div>
          {/* title */}
          <div className="flex items-center justify-between px-5 bg-white w-full shadow-md">
            <p className=" text-2xl font-semibold text-gray-500">Title:</p>
            <p className=" text-2xl text-center py-5 font-semibold">{title}</p>
          </div>
          {/* persons */}
          <div className="flex items-center justify-between px-5 bg-white w-full shadow-md">
            <p className=" text-2xl font-semibold text-gray-500">Persons:</p>
            <p className=" text-2xl text-center py-5 font-semibold">
              {persons}
            </p>
          </div>

          {/* Profile Details */}
          <div className=" bg-white flex flex-col w-full mt-10 py-7 px-5">
            <div className="flex items-center mx-5 justify-between">
              <img
                src={userImage}
                alt=""
                width={40}
                height={40}
                className=" rounded-full"
              />
              <h1 className=" text-lg font-medium">
                {firstName} {lastName}
              </h1>
            </div>
            <button
              onClick={() => setShowContact(true)}
              className="showContactButton "
            >
              <PhoneIcon className=" h-6 mr-2" />
              {showContact ? <p>{phoneNo}</p> : <p>Show Contact</p>}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default withRouter(ProductDetails);
