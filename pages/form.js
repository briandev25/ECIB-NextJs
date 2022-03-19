import React from "react";
import Header from "../components/Header";
import "antd/dist/antd.css";
import Image from "next/image";

import FormFields from "../components/FormFields";

function InputForm() {
  return (
    <div>
      <Header />
      <main className="flex w-screen h-[calc(100vh-70px)]">
        {/* left */}
        <div className=" hidden md:inline-block relative w-1/2 xl:w-2/5 ">
          <Image src="/images/form.jpg" layout="fill" objectFit="cover" />
        </div>
        {/* right */}
        <div className=" w-full md:w-1/2 xl:w-3/5 mx-auto overflow-y-auto scrollbar-hide">
          <FormFields />
        </div>
      </main>
    </div>
  );
}

export default InputForm;
