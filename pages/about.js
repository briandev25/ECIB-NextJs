import React from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";

function about() {
  return (
    <div>
      <Header />
      <div className=" h-[500px] flex flex-col md:flex-row items-center  lg:justify-evenly  bg-white shadow-2xl min-w-xl px-10">
        <div className=" w-3/5">
          <h1 className=" text-black font-extrabold md:text-3xl lg:text-5xl mb-6">
            Hello,My name is Bryan Kiprop
          </h1>
          <p className=" text-gray-500 font-light">
            I am a junior developer with passion in programming,looking to
            improve my skills in frontend and backend development and the
            creator of this project.
          </p>
          <div className=" mt-5">
            <Link href="https://my-website-e6215.web.app/">
              <button className=" bg-blue-500 py-2 px-5 text-white rounded-md active:scale-95 transition transform duration-150 ease-in-out">
                Visit my website
              </button>
            </Link>
          </div>
        </div>
        <div className=" w-1/5 flex justify-center items-center">
          <div className="relative hidden md:flex  h-[150px] w-[150px] lg:h-[200px] lg:w-[200px] xl:h-[250px] xl:w-[250px] rounded-full bg-blue-500 shadow-2xl ">
            <Image
              src="/images/profile.png"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default about;
