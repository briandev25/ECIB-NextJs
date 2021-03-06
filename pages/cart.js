import Head from "next/head";
import Image from "next/image";
import React from "react";
import Header from "../components/Header";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import Footer from "../components/Footer";
import Subtotal from "../components/Subtotal";

function Cart() {
  const router = useRouter();
  const cart = useSelector((state) => state?.cart);

  return (
    <div className="relative h-screen">
      <Head>
        <title>ECIB-Cart</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/images/my-logo.png" />
      </Head>
      <Header />

      {cart?.length < 1 ? (
        <div className="flex items-center justify-center mb-10">
          <div className="flex flex-col bg-white mt-20 min-w-[300px] mx-10 w-full  md:w-1/2">
            <h1 className=" text-center text-2xl font-semibold py-5">
              Your Cart is empty
            </h1>
            <Image
              alt=""
              src="/images/empty-cart.png"
              width={300}
              height={300}
              objectFit="contain"
            />
            <button onClick={() => router.push("/")} className="cartButton">
              Back to shopping
            </button>
          </div>
        </div>
      ) : (
        <div className="flex max-w-screen-xl mx-auto flex-col items-center justify-center w-full">
          <h1 className=" text-3xl font-semibold m-5">Shopping Details</h1>
          <div className="flex flex-col   w-full">
            {/* CartItems */}
            <div className=" flex flex-col flex-grow">
              {cart?.map((item) => (
                <CartItem key={item.id} {...item} />
              ))}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Cart;
